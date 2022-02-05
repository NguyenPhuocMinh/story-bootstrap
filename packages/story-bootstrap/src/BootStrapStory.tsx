import { BootStrapCoreProps } from 'sb-core';

import BootStrapStoryContext from './BootStrapStoryContext';
import BootStrapStoryUI from './BootStrapStoryUI';

const BootStrapStory = (props: BootStrapCoreProps) => {
  const {
    layout,
    authProvider,
    catchAll,
    children,
    customReducers,
    dashboard,
    i18nProvider,
    initialState,
    loading,
    loginPage,
    registerPage,
    logoutButton,
    theme,
    title = 'BootStrap Story'
  } = props;

  return (
    <BootStrapStoryContext
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      customReducers={customReducers}
      initialState={initialState}
    >
      <BootStrapStoryUI
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
      </BootStrapStoryUI>
    </BootStrapStoryContext>
  );
};

export default BootStrapStory;
