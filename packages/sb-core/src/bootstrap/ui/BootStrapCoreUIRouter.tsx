import { Children, useEffect, cloneElement, createElement } from 'react';
import { Routes, Route } from 'react-router-dom';
// hooks
import {
  useLogout,
  useGetPermissions,
  useAuthState,
  useSafeSetState,
  useTimeout
} from '../../hooks';
import { RoutesWithLayout } from '../../routes';
import { BootStrapCoreUIRouterProps } from '../../types';

const BootStrapCoreUIRouter = (props: BootStrapCoreUIRouterProps) => {
  const doLogout = useLogout();
  const getPermissions = useGetPermissions();
  const { authenticated } = useAuthState();
  const oneSecondHasPassed = useTimeout(1000);
  const [computedChildren, setComputedChildren] = useSafeSetState([]);

  useEffect(() => {
    if (typeof props.children === 'function') {
      initializeResources();
    }
  }, [authenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const initializeResources = async () => {
    try {
      const permissions = await getPermissions();

      const resolveChildren = props.children as any; // type casting

      const childrenFuncResult = resolveChildren(permissions);
      if (childrenFuncResult) {
        childrenFuncResult.then((resolvedChildren: any[]) =>
          setComputedChildren(
            resolvedChildren
              .filter(child => child)
              .map(child => ({
                ...child,
                props: {
                  ...child.props,
                  key: child.props.name
                }
              }))
          )
        );
      } else {
        setComputedChildren(childrenFuncResult.filter((child: any) => child));
      }
    } catch (error) {
      console.error(error);
      doLogout();
    }
  };

  const {
    layout,
    catchAll,
    children,
    dashboard,
    loading: LoadingPage,
    logout,
    theme,
    title,
    location,
    navigate
  } = props;

  if (
    (typeof children === 'function' &&
      (!computedChildren || computedChildren.length === 0)) ||
    (Array.isArray(children) && children.length === 0)
  ) {
    return (
      <Routes>
        {oneSecondHasPassed && (
          <Route key="loading" element={<LoadingPage theme={theme} />} />
        )}
      </Routes>
    );
  }

  const childrenToRender =
    typeof children === 'function' ? computedChildren : children;

  return (
    <Routes>
      <Route
        path="*"
        element={createElement(
          layout,
          {
            dashboard,
            logout,
            theme,
            title,
            location,
            navigate
          },
          <RoutesWithLayout
            catchAll={catchAll}
            dashboard={dashboard}
            title={title}
            location={location}
            navigate={navigate}
          >
            {Children.map(childrenToRender, child => {
              return cloneElement(child, {
                key: child.props.name,
                intent: 'route'
              });
            })}
          </RoutesWithLayout>
        )}
      />
    </Routes>
  );
};

export default BootStrapCoreUIRouter;
