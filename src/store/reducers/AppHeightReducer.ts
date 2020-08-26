import {
  USER_NOT_LOGGED,
  USER_LOGGED,
  AppHeight,
  LogUserActions,
  ILogState,
} from "../types";

export const appHeightReducer = (
  state: ILogState = { height: AppHeight.LANDING, isLogin: false },
  action: LogUserActions
) => {
  switch (action.type) {
    case USER_LOGGED:
      state = {
        ...state,
        height: AppHeight.DASHBOARD,
        isLogin: true,
      };
      break;
    case USER_NOT_LOGGED:
      state = {
        ...state,
        height: AppHeight.LANDING,
      };
      break;
  }
  return state;
};
