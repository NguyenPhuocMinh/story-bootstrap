import { combineReducers, Reducer } from 'redux';
import admin from './admin';
import notify from './notify';
interface CustomReducers {
  [key: string]: Reducer;
}

const rootReducer = (customReducers: CustomReducers) =>
  combineReducers({
    admin,
    notify,
    ...customReducers
  });

export default rootReducer;
