import { USER_NOT_LOGGED, USER_LOGGED, LogUserActions } from "../types";

// action creator for changing app height
export const changeToLogged = (): LogUserActions => ({
  type: USER_LOGGED,
  payload: true,
});
export const changeToLogout = (): LogUserActions => ({
  type: USER_NOT_LOGGED,
  payload: false,
});
