import { connectRouter } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import admin from './admin';
import notify from './notify';
interface CustomReducers {
  [key: string]: Reducer;
}

const rootReducer = (customReducers: CustomReducers, history) =>
  combineReducers({
    admin,
    notify,
    router: connectRouter(history),
    ...customReducers
  });

export default rootReducer;
