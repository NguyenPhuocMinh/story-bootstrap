import { useContext } from 'react';
// redux
import { Provider, ReactReduxContext } from 'react-redux';
// i18n
import { I18nextProvider } from 'react-i18next';
// store
import { rootStore } from '../../rootStore';
// contexts
import AuthContext from '../auth/AuthCoreContext';
import { BootStrapCoreContextProps } from '../../types';
import { BrowserRouter as Router } from 'react-router-dom';

const BootStrapCoreContext = (props: BootStrapCoreContextProps) => {
  const { authProvider, i18nProvider, children, customReducers, initialState } =
    props;

  const reduxIsAlreadyInitialized = !!useContext(ReactReduxContext);

  const renderCore = () => {
    return (
      <AuthContext.Provider value={authProvider}>
        <I18nextProvider i18n={i18nProvider}>
          <Router>{children}</Router>
        </I18nextProvider>
      </AuthContext.Provider>
    );
  };

  const store = rootStore({
    customReducers,
    initialState
  });

  if (reduxIsAlreadyInitialized) {
    return renderCore();
  } else {
    return <Provider store={store}>{renderCore()}</Provider>;
  }
};

export default BootStrapCoreContext;
