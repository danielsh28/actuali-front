
/**
 * types for the app height state management
 */

import {ActualiWidgetdata, CardMapFunction, UsersChoicesMap} from "../AppTypes";
import {UserInfo} from "os";

export enum AppHeight {
    DASHBOARD = '100vh',
    LANDING = '200vh'
}

export const USER_LOGGED = '[USER] LOGGED';
export const USER_NOT_LOGGED = '[USER] NOT LOGGED';

export interface ILoginAction {
    type: typeof USER_LOGGED;
    payload:boolean;

}
export interface ILogoutAction {
    type: typeof USER_NOT_LOGGED;
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
export const USER_ADD_TO_CHOICES = '[USER] ADD TO CHOICES';

 export interface UserStatusNewAction {
    type : typeof USER_STATUS_NEW;
    payload:  { loggedUserStatus: LoggedUserStatus, mapDataFunc: CardMapFunction}
}
export interface UserStatusExistAction {
    type : typeof USER_STATUS_EXIST,
    payload: {
        loggedUserStatus: LoggedUserStatus,
        mapDataFunc:CardMapFunction
    }
}
export  interface addUserChoiceAction {
    type: typeof  USER_ADD_TO_CHOICES,
    payload:string

}
export type LoggedUserStatusActions = UserStatusExistAction | UserStatusNewAction |  addUserChoiceAction;

export interface IUserStatusState {
    status: LoggedUserStatus,
    mapFunc: CardMapFunction,
    categories: UsersChoicesMap
}
/**
 * types for the fetch data
 */
export const FETCH_DATA_REQUEST = '[FETCH] DATA REQUEST';
export const FETCH_DATA_SUCCESS = '[FETCH] DATA SUCCESS ';
export const FETCH_DATA_ERROR = '[FETCH] DATA ERROR';

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