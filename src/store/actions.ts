import {
    AppHeight,
    APP_HEIGHT_LOGIN,
    LogUserActions,
    APP_HEIGHT_LANDING,
    LoggedUserStatus,
    USER_STATUS_EXIST,
    USER_STATUS_NEW,
    FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS
} from './types';
import axios from 'axios';
import {ACTUALI_SERVER_BASE_URL} from '../utils/app-constants'
import  {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {RootState} from "./configureStore";
import { Action,AnyAction } from 'redux'


axios.defaults.baseURL = ACTUALI_SERVER_BASE_URL;


//action creator for changing app height
export const changeToLogin = (height:AppHeight):LogUserActions  =>{
    return {
        type : APP_HEIGHT_LOGIN,
        payload:true
    }
}
export const changeToLogout = ()=> {
    return {
        type: APP_HEIGHT_LANDING,
        payload:false
    }
}

export const changeUserStatusToNew = (mapFunc :Function)=>{
    return {
        type : USER_STATUS_NEW ,
        payload : {
            status : LoggedUserStatus.FIRST_LOGIN,
            mapDataFunc:mapFunc
        }
    }
}

 export const changeUserStatusToExist = (mapFunc :Function)=>{
    return {
        type : USER_STATUS_EXIST,
        payload : {
            status:LoggedUserStatus.EXIST,
            mapDataFunc :mapFunc
        }
    }
 }

 const fetchDataRequest = ()=>{
    return{
        type: FETCH_DATA_REQUEST,
        payload:{loading:true}
    }
 }
const fetchDataError = (message:string)=>{
    return{
        type: FETCH_DATA_REQUEST,
       payload:{
         loading:false,
        error:message}
    }
}


const fetchDataSuccess = (data: any) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {
            loading: false,
            data: data
        }

    }
}
/*const fetchCategoriesRequest = ()=>{
    return{
        type: FETCH_DATA_REQUEST,
        loading:true
    }
}
const fetchCategoriesError = (message:string)=>{
    return{
        type: FETCH_DATA_REQUEST,
        loading:false,
        error:message
    }
}


const fetchCategoriesSuccess = (data:any) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        loading:false,
        data:data

    }
}*/

 export const  fetchData  = (query:string) : ThunkAction<void,RootState,unknown,AnyAction> => (dispatch:ThunkDispatch<RootState,{},AnyAction>) => {
    dispatch(fetchDataRequest());
    axios.get(query).then((res)=>{
        dispatch(fetchDataSuccess(res.data));
    }).catch(err=>{
        dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    })
}
