/**
 * types for the app height state management
 */

import { CardMapFunction, UsersChoicesMap } from '../AppTypes';
import { AnyAction } from 'redux';
import {INewsData} from "../components/UI/molecules/ActualiCards/NewsCard";
import {ICategoryData} from "../components/UI/molecules/ActualiCards/CategoryCard";

export enum AppHeight {
  DASHBOARD = '100vh',
  LANDING = '200vh',
}

export const USER_LOGGED = '[USER] LOGGED';
export const USER_NOT_LOGGED = '[USER] NOT LOGGED';

export interface ILoggedAction {
  type: typeof USER_LOGGED;
  payload: boolean;
}
export interface ILogoutAction {
  type: typeof USER_NOT_LOGGED;
  payload: boolean;
}

export type LogUserActions = ILogoutAction | ILoggedAction;

export interface ILogState {
  height: AppHeight;
  isLogin: boolean;
}

/**
 * user status -new user or known user
 */
export enum LoggedUserStatus {
  FIRST_LOGIN = 'first-login',
  EXIST = 'exist-user',
  NOT_INITIALIZED = 'not-initialized',
}
export const USER_STATUS_NEW = '[USER] STATUS NEW';
export const USER_STATUS_EXIST = '[USER] STATUS EXIST';
export const USER_TOGGLE_CHOICES = '[USER] TOGGLE CHOICES';

export interface UserStatusNewAction {
  type: typeof USER_STATUS_NEW;
  payload: { loggedUserStatus: LoggedUserStatus; mapDataFunc: CardMapFunction };
}
export interface UserStatusExistAction {
  type: typeof USER_STATUS_EXIST;
  payload: {
    loggedUserStatus: LoggedUserStatus;
    mapDataFunc: CardMapFunction;
  };
}
export interface addUserChoiceAction {
  type: typeof USER_TOGGLE_CHOICES;
  payload: string;
}
export type LoggedUserStatusActions = UserStatusExistAction | UserStatusNewAction | addUserChoiceAction;

export interface IUserStatusState {
  status: LoggedUserStatus;
  mapFunc?: CardMapFunction;
  categories: UsersChoicesMap;
}
/**
 * types for the fetch data
 */
export const FETCH_DATA_REQUEST = '[FETCH] DATA REQUEST';
export const FETCH_DATA_SUCCESS = '[FETCH] DATA SUCCESS';
export const FETCH_DATA_ERROR = '[FETCH] DATA ERROR';
export const CLEAR_DATA = '[CLEAR] DATA';
export const LOGIN_USER = '[LOGIN] USER';

export enum  dataType
{CATEGORIES, NEWS};

/**
 * ********************Action types*************************************8
 */
export interface IFetchRequestAction extends AnyAction {
  type: typeof FETCH_DATA_REQUEST;
  payload: undefined;
}

export interface IFetchSuccessAction extends AnyAction {
  type: typeof FETCH_DATA_SUCCESS;
  dataType : dataType
  payload:  {
    categoriesData?: ICategoryData[];
    newsData?: INewsData[];
  };
}
// contains the error message
export interface IFetchErrorAction extends AnyAction {
  type: typeof FETCH_DATA_ERROR;
  payload: string;
}
export interface ILoginAction extends AnyAction {
  type: typeof LOGIN_USER;
  payload: {
    email: string;
    pwd: string;
  };
}
export interface ICLearData extends AnyAction {
  type: typeof CLEAR_DATA;
  payload: {
    categories?: [];
    news?: [];
  };
}
export type FetchActionsTypes =
  | IFetchErrorAction
  | IFetchRequestAction
  | IFetchSuccessAction
  | ILoginAction
  | ICLearData;


/**
 * *****************State Types***********************************
 */
export interface IFetchState {
  loading: boolean;
  newsData: Array<INewsData>;
  categoriesData: Array<ICategoryData>;
  error: string;
}
