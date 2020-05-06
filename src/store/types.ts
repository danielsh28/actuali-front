
/**
 * types for the app height state management
 */
import {ActualiWidgetdata} from "../AppTypes";

export enum AppHeight {
    DASHBOARD = '100vh',
    LANDING = '200vh'
}

export const APP_HEIGHT_LOGIN = '[APP] HEIGHT LOGIN';
export const APP_HEIGHT_LANDING = '[APP] HEIGHT LANDING';

export interface ILoginAction {
    type: typeof APP_HEIGHT_LOGIN;
    payload:boolean;

}
export interface ILogoutAction {
    type: typeof APP_HEIGHT_LANDING;
    payload:boolean;

}

export type LogUserActions = ILogoutAction | ILoginAction;

export interface ILogState
{
    height:AppHeight,
    isLogin:boolean
}

/**
 * user status -new user or known user
 */
export enum LoggedUserStatus {
FIRST_LOGIN='first-login',
    EXIST = 'exist-user'
}
export const USER_STATUS_NEW = '[USER] STATUS NEW';
export const USER_STATUS_EXIST = '[USER] STATUS EXIST';

 export interface UserStatusNewAction {
    type : typeof USER_STATUS_NEW;
    payload: LoggedUserStatus
}
export interface UserStatusExistAction {
     type : typeof USER_STATUS_EXIST,
     payload: LoggedUserStatus

}
export type LoggedUserStatusActions = UserStatusExistAction | UserStatusNewAction ;

export interface IUserStatusState {
    status: LoggedUserStatus;
}
/**
 * types for the fetch data
 */
export const FETCH_DATA_REQUEST = '[FETCH] DATA REQUEST';
export const FETCH_DATA_SUCCESS = '[FETCH] DATA REQUEST';
export const FETCH_DATA_ERROR = '[FETCH] DATA REQUEST';

export interface IFetchRequestAction {
    type:typeof  FETCH_DATA_REQUEST,
    payload:undefined
}

export interface  IFetchSuccessAction {
    type: typeof FETCH_DATA_SUCCESS,
    payload: Array<ActualiWidgetdata>

}
//contains the error message
export interface  IFetchErrorAction {
    type: typeof FETCH_DATA_ERROR,
    payload: string

}
export type FetchActionsTypes =  IFetchErrorAction | IFetchRequestAction | IFetchSuccessAction;

export interface  IFetchState {
    loading: boolean,
    data : Array<ActualiWidgetdata>,
    error : string
}