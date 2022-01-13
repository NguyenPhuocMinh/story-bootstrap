import { Reducer } from 'redux';
import { CHANGE_SIDE_BAR, ChangeSideBar } from '../actions';

export interface AdminState {
  readonly sidebarIsOpen: boolean;
}

const initialState: AdminState = {
  sidebarIsOpen: true
};

type ActionTypes = ChangeSideBar | { type: 'OTHER_ACTION' };

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
    default:
      return state;
  }
};

export default adminReducer;
