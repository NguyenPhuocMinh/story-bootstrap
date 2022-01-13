import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// middleware
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// reducers
import { CLEAR_STATE } from '../actions';
import rootReducer from '../reducers';
import { RootStoreParams } from '../../types';
import { optionDevTools, optionsLogger } from '../../utils';

const rootStore = ({
  history,
  customReducers = {},
  initialState
}: RootStoreParams): any => {
  const appReducer = rootReducer(customReducers, history);

  const resettableAppReducer = (state, action) =>
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

  const loggerMiddleware = createLogger(optionsLogger);

  const store = createStore(
    resettableAppReducer,
    typeof initialState === 'function' ? initialState() : initialState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerMiddleware(history)
      )
    )
  );
  return store;
};

export default rootStore;
