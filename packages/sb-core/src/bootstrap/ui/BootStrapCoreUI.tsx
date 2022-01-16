import React, { createElement, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
// core ui router
import BootStrapCoreUIRouter from './BootStrapCoreUIRouter';
import { BootStrapCoreUIProps } from '../../types';

const BootStrapCoreUI = (props: BootStrapCoreUIProps) => {
  const {
    catchAll = Noop,
    children,
    dashboard,
    layout,
    loading = Noop,
    loginPage = Noop,
    registerPage = Noop,
    logout,
    theme,
    title = 'Demo Basic React'
  } = props;

  const logoutElement = useMemo(
    () => logout && createElement(logout),
    [logout]
  );

  return (
    <Routes>
      <Route
        path="/login"
        element={(renderProps: any) =>
          createElement(loginPage, {
            ...renderProps,
            title,
            theme
          })
        }
      />
      <Route
        path="/register"
        element={(renderProps: any) =>
          createElement(registerPage, {
            ...renderProps,
            title,
            theme
          })
        }
      />
      <Route
        path="/"
        element={(renderProps: any) => (
          <BootStrapCoreUIRouter
            catchAll={catchAll}
            dashboard={dashboard}
            layout={layout}
            loading={loading}
            logout={logoutElement}
            theme={theme}
            title={title}
            {...renderProps}
          >
            {children}
          </BootStrapCoreUIRouter>
        )}
      />
    </Routes>
  );
};

const Noop = () => {
  return null;
};

export default BootStrapCoreUI;
