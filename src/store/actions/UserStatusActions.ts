import { CardMapFunction } from '../../AppTypes';
import {
  LoggedUserStatus,
  USER_TOGGLE_CHOICES,
  USER_STATUS_EXIST,
  USER_STATUS_NEW,
  LogUserActions,
  USER_LOGGED,
  USER_NOT_LOGGED,
} from '../types';

/*export const changeUserStatusToNew = (mapFunc: CardMapFunction) => {
  return {
    type: USER_STATUS_NEW,
    payload: {
      status: LoggedUserStatus.FIRST_LOGIN,
      mapDataFunc: mapFunc,
    },
  };
};

// action creator for changing app height
export const changeToLogged = (): LogUserActions => ({
  type: USER_LOGGED,
  payload: true,
});
export const changeToLogout = (): LogUserActions => ({
  type: USER_NOT_LOGGED,
  payload: false,
});*/

export const changeUserStatusToExist = () => {
  return {
    type: USER_STATUS_EXIST,
    payload: {
      status: LoggedUserStatus.EXIST
    },
  };
};

export const toggleUserChoice = (userChoice: string) => {
  return {
    type: USER_TOGGLE_CHOICES,
    payload: userChoice,
  };
};
