import { LoggedUserStatus, USER_TOGGLE_CHOICES, USER_STATUS_EXIST } from '../types';

export const changeUserStatusToExist = () => {
  return {
    type: USER_STATUS_EXIST,
    payload: {
      status: LoggedUserStatus.EXIST,
    },
  };
};

export const toggleUserChoice = (userChoice: string) => {
  return {
    type: USER_TOGGLE_CHOICES,
    payload: userChoice,
  };
};
