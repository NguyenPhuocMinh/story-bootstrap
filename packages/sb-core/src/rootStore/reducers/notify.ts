import { Reducer } from 'redux';
import {
  SHOW_NOTIFICATION,
  ShowNotification,
  HIDE_NOTIFICATION,
  HideNotification,
  RESET_NOTIFICATION,
  ResetNotification
} from '../actions';

export interface NotifyState {
  readonly notification: object;
}

const initialState: NotifyState = {
  notification: {}
};

type NotifyTypes =
  | ShowNotification
  | HideNotification
  | ResetNotification
  | { type: 'OTHER_ACTION' };

const notifyReducer: Reducer<NotifyState> = (
  state = initialState,
  action: NotifyTypes
) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.payload
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: {}
      };
    case RESET_NOTIFICATION: {
      return {
        ...state,
        notification: {}
      };
    }
    default:
      return state;
  }
};

export default notifyReducer;
