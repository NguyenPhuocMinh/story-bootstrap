import React, { Children, cloneElement, createElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesWithLayoutProps } from '../types';
import WithPermissions from '../hoc/auth/WithPermissions';
import Redirection from './Redirection';

const defaultAuthParams = { route: 'dashboard' };

const RoutesWithLayout = (props: RoutesWithLayoutProps) => {
  const { dashboard, title, catchAll, children } = props;
  const childrenAsArray = Children.toArray(children);
  const firstChild = childrenAsArray.length > 0 ? childrenAsArray[0] : null;

  return (
    <Routes>
      {Children.map(children, child => (
        <Route
          key={child.props.name}
          path={`/${child.props.name}`}
          element={props =>
            cloneElement(child, {
              intent: 'route',
              ...props
            })
          }
        />
      ))}
      {dashboard ? (
        <Route
          path="/"
          element={routeProps => (
            <WithPermissions
              authParams={defaultAuthParams}
              component={dashboard}
              {...routeProps}
            />
          )}
        />
      ) : firstChild ? (
        <Route
          path="/"
          element={() => <Redirection to={`/${firstChild.props.name}`} />}
        />
      ) : null}
      <Route
        element={routeProps =>
          createElement(catchAll, {
            ...routeProps,
            title
          })
        }
      />
    </Routes>
  );
};

export default RoutesWithLayout;
