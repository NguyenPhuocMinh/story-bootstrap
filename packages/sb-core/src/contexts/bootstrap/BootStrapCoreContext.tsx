import React, { useContext, useState } from 'react';
import { ConnectedRouter } from 'connected-react-router';
// history
import { createHashHistory } from 'history';
// redux
import { Provider, ReactReduxContext } from 'react-redux';
// i18n
import { I18nextProvider } from 'react-i18next';
// store
import { rootStore } from '../../rootStore';
// contexts
import AuthContext from '../auth/AuthCoreContext';
import { BootStrapCoreContextProps } from '../../types';
// import { ConnectedRouter } from '../../routes';

const BootStrapCoreContext = (props: BootStrapCoreContextProps) => {
  const {
    authProvider,
    i18nProvider,
    children,
    history,
    customReducers,
    initialState
  } = props;

  const reduxIsAlreadyInitialized = !!useContext(ReactReduxContext);

  const finalHistory = history || createHashHistory();

  const renderCore = () => (
    <AuthContext.Provider value={authProvider}>
      <I18nextProvider i18n={i18nProvider}>
        <ConnectedRouter history={finalHistory}>{children}</ConnectedRouter>
      </I18nextProvider>
    </AuthContext.Provider>
  );

  const [store] = useState(() =>
    !reduxIsAlreadyInitialized
      ? rootStore({
          customReducers,
          initialState,
          history: finalHistory
        })
      : undefined
  );

  if (reduxIsAlreadyInitialized) {
    if (!history) {
      throw new Error('Missing history props');
    }
    return renderCore();
  } else {
    return <Provider store={store}>{renderCore()}</Provider>;
  }
};

export default BootStrapCoreContext;
