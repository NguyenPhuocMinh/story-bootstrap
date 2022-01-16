import React, { Children, useEffect, cloneElement, createElement } from 'react';
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
import {
  BootStrapCoreUIRouterProps,
  ResolveResourceFunction,
  ResourceElement
} from '../../types';

const BootStrapCoreUIRouter = (props: BootStrapCoreUIRouterProps) => {
  const getPermissions = useGetPermissions();
  const doLogout = useLogout();
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

      const resolveChildren = props.children as ResolveResourceFunction; // type casting

      const childrenFuncResult = resolveChildren(permissions);
      if (childrenFuncResult as Promise<ResourceElement[]>) {
        (childrenFuncResult as Promise<ResourceElement[]>).then(
          resolvedChildren =>
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
        setComputedChildren(
          (childrenFuncResult as ResourceElement[]).filter(child => child)
        );
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
    title
  } = props;

  if (
    (typeof children === 'function' &&
      (!computedChildren || computedChildren.length === 0)) ||
    (Array.isArray(children) && children.length === 0)
  ) {
    return (
      <Routes>
        {oneSecondHasPassed && (
          <Route key="loading" element={() => <LoadingPage theme={theme} />} />
        )}
      </Routes>
    );
  }

  const childrenToRender =
    typeof children === 'function' ? computedChildren : children;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(renderProps: any) =>
            createElement(
              layout,
              {
                dashboard,
                logout,
                theme,
                title,
                ...renderProps
              },
              <RoutesWithLayout
                catchAll={catchAll}
                dashboard={dashboard}
                title={title}
              >
                {Children.map(childrenToRender, child =>
                  cloneElement(child, {
                    key: child.props.name,
                    intent: 'route'
                  })
                )}
              </RoutesWithLayout>
            )
          }
        />
      </Routes>
    </div>
  );
};

export default BootStrapCoreUIRouter;
