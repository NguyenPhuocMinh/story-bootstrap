import React from 'react';
import { BootStrapProps } from 'sb-core';

import BootStrapStoryUI from './BootStrapStoryUI';
import BootStrapStoryContext from './BootStrapStoryContext';

const BootStrapStory = (props: BootStrapProps) => {
  const {
    authProvider,
    catchAll,
    children,
    customReducers,
    dashboard,
    history,
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
    <BootStrapStoryContext
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      history={history}
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
