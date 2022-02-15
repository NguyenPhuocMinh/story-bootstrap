import { Children, cloneElement, createElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesWithLayoutProps } from '../types';
import WithPermissions from '../hoc/auth/WithPermissions';
import Redirection from './Redirection';

const defaultAuthParams = { route: 'dashboard' };

const RoutesWithLayout = (props: RoutesWithLayoutProps) => {
  const { dashboard, title, catchAll, children, location, navigate } = props;

  const childrenAsArray = Children.toArray(children);
  const firstChild =
    childrenAsArray.length > 0 ? (childrenAsArray[0] as any) : null;

  return (
    <Routes>
      {Children.map(children, child => {
        return (
          <Route
            key={child.props.name}
            path={`/${child.props.name}`}
            element={cloneElement(child, { intent: 'route', ...props })}
          />
        );
      })}
      {dashboard ? (
        <Route
          path="/"
          element={
            <WithPermissions
              authParams={defaultAuthParams}
              component={dashboard}
              location={location}
              navigate={navigate}
            />
          }
        />
      ) : firstChild ? (
        <Route
          path="/"
          element={<Redirection to={`/${firstChild.props.name}`} />}
        />
      ) : null}
      <Route
        path="*"
        element={createElement(catchAll, {
          title,
          location,
          navigate
        })}
      />
    </Routes>
  );
};

export default RoutesWithLayout;
