import { BootStrapCoreContext } from '../contexts';
import { BootStrapCoreUI } from './ui';
import { BootStrapCoreProps } from '../types';

const BootStrapCore = (props: BootStrapCoreProps) => {
  const {
    authProvider,
    catchAll,
    children,
    customReducers,
    dashboard,
    i18nProvider,
    initialState,
    layout,
    loading,
    loginPage,
    registerPage,
    logoutButton,
    theme,
    title = 'Demo Basic React'
  } = props;

  return (
    <BootStrapCoreContext
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      customReducers={customReducers}
      initialState={initialState}
    >
      <BootStrapCoreUI
        layout={layout}
        dashboard={dashboard}
        catchAll={catchAll}
        theme={theme}
        title={title}
        loading={loading}
        loginPage={loginPage}
        registerPage={registerPage}
        logout={authProvider ? logoutButton : undefined}
      >
        {children}
      </BootStrapCoreUI>
    </BootStrapCoreContext>
  );
};

export default BootStrapCore;
