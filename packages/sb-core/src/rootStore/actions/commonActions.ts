import EventEmitter from 'eventemitter3';

export const CLEAR_STATE = 'CLEAR_STATE';
export const CHANGE_SIDE_BAR = 'CHANGE_SIDE_BAR';
export const COMPLETE = 'COMPLETE';
export const UNDO = 'UNDO';
export const REFRESH_PAGE = 'REFRESH_PAGE';
export interface ClearState {
  readonly type: typeof CLEAR_STATE;
}

export const clearState = (): ClearState => ({
  type: CLEAR_STATE
});

export interface ChangeSideBar {
  readonly type: typeof CHANGE_SIDE_BAR;
  readonly payload: boolean;
}

export const changeSideBar = (isOpen: boolean): ChangeSideBar => ({
  type: CHANGE_SIDE_BAR,
  payload: isOpen
});

export interface Complete {
  readonly type: typeof COMPLETE;
}

export const complete = (): Complete => ({
  type: COMPLETE
});

export interface Undo {
  readonly type: typeof UNDO;
}

export const undo = (): Undo => ({
  type: UNDO
});

export interface RefreshPage {
  readonly type: typeof REFRESH_PAGE;
  readonly payload: boolean;
}

export const refreshPage = (spin: boolean): RefreshPage => {
  return {
    type: REFRESH_PAGE,
    payload: spin
  };
};

export const undoAbleEventEmitter = new EventEmitter();
