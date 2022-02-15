import { Reducer } from 'redux';
import {
  CHANGE_SIDE_BAR,
  ChangeSideBar,
  REFRESH_PAGE,
  RefreshPage
} from '../actions';

export interface AdminState {
  readonly sidebarIsOpen: boolean;
  readonly spin: boolean;
}

const initialState: AdminState = {
  sidebarIsOpen: true,
  spin: false
};

type ActionTypes = ChangeSideBar | RefreshPage | { type: 'OTHER_ACTION' };

const adminReducer: Reducer<AdminState> = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case CHANGE_SIDE_BAR:
      return {
        ...state,
        sidebarIsOpen: action.payload
      };
    case REFRESH_PAGE:
      return {
        ...state,
        spin: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
