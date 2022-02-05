import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// middleware
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// reducers
import { CLEAR_STATE } from './actions';
import rootReducer from './reducers';
import { RootStoreParams } from '../types';
import { optionDevTools, optionsLogger } from '../utils';

const loggerMiddleware = createLogger(optionsLogger);

const rootStore = (props: RootStoreParams) => {
  const { customReducers, initialState } = props;

  const appReducer = rootReducer(customReducers);

  const resettableAppReducer = (state: any, action: any) =>
    appReducer(
      action.type !== CLEAR_STATE
        ? state
        : {
            ...state,
            admin: {
              ...state.admin,
              resources: {}
            }
          },
      action
    );

  const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
      composeWithDevTools(optionDevTools)) ||
    compose;

  const store = createStore(
    resettableAppReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
  return store;
};

export default rootStore;
