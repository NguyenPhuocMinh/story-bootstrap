import { createElement, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { BootStrapCoreUIProps } from '../../types';
// core ui router
import BootStrapCoreUIRouter from './BootStrapCoreUIRouter';

const BootStrapCoreUI = (props: BootStrapCoreUIProps) => {
  const {
    catchAll,
    children,
    dashboard,
    layout,
    loading = Noop,
    loginPage: LoginPage = Noop,
    registerPage: RegisterPage = Noop,
    logout,
    theme,
    title = 'Demo Basic React'
  } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const logoutElement = useMemo(
    () => logout && createElement(logout),
    [logout]
  );

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage location={location} navigate={navigate} />}
      />
      <Route
        path="/register"
        element={<RegisterPage location={location} navigate={navigate} />}
      />
      <Route
        path="*"
        element={
          <BootStrapCoreUIRouter
            catchAll={catchAll}
            dashboard={dashboard}
            layout={layout}
            loading={loading}
            logout={logoutElement}
            theme={theme}
            title={title}
            location={location}
            navigate={navigate}
          >
            {children}
          </BootStrapCoreUIRouter>
        }
      />
    </Routes>
  );
};

const Noop = () => {
  return null;
};

export default BootStrapCoreUI;
