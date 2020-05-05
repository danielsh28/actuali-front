import {ICategoryData} from '../components/UI/molecules/NewsCard/CategoryCard'
import {INewsData} from '../components/UI/molecules/NewsCard/NewsCard'

type ActualiWidgetdata = ICategoryData | INewsData;
/**
 * types for the app height state management
 */
export enum AppHeight {
    DASHBOARD = '100vh',
    LANDING = '200vh'
}

export const APP_HEIGHT_LOGIN = '[APP] HEIGHT LOGIN';
export const APP_HEIGHT_LANDING = '[APP] HEIGHT LANDING';

export interface IAppHeightLoginAction {
    type: typeof APP_HEIGHT_LOGIN;

}
export interface IAppHeightLandingAction {
    type: typeof APP_HEIGHT_LANDING;
}

export type AppHeightActions = IAppHeightLandingAction | IAppHeightLoginAction;

export interface IAppHeightState
{
    height:AppHeight
}

/**
 * user status -new user or known user
 */
export enum UserStatus {
FIRST_LOGIN,
    EXIST
}
export const USER_STATUS_NEW = '[USER] STATUS NEW';
export const USER_STATUS_EXIST = '[USER] STATUS EXIST';

 interface UserStatusNewAction {
    type : typeof USER_STATUS_NEW;
    payload: UserStatus
}
interface UserStatusExistAction {
     type : typeof USER_STATUS_EXIST,
     payload: UserStatus

}
export type UserStatusActions = UserStatusExistAction | UserStatusNewAction ;

export interface IUserStatusState {
    status: UserStatus;
}
/**
 * types for the fetch data
 */
const FETCH_DATA_REQUEST = '[FETCH] DATA REQUEST';
const FETCH_DATA_SUCCESS = '[FETCH] DATA REQUEST';
const FETCH_DATA_ERROR = '[FETCH] DATA REQUEST';

interface IFetchRequestAction {
    type:typeof  FETCH_DATA_REQUEST,
}

interface  IFetchSuccessAction {
    type: typeof FETCH_DATA_SUCCESS,
    payload: ActualiWidgetdata

}
//contains the error message
interface  IFetchErrorAction {
    type: typeof FETCH_DATA_ERROR,
    payload: string

}
export type FetchActionsTypes =  IFetchErrorAction | IFetchRequestAction | IFetchSuccessAction;

interface  IFetchState {
    loading: boolean,
    data : ActualiWidgetdata,
    error : string
}