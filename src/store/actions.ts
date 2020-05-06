import {
    AppHeight,
    APP_HEIGHT_LOGIN,
    LogUserActions,
    APP_HEIGHT_LANDING,
    LoggedUserStatus,
    FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS
} from './types';
import axios from 'axios';
import {Dispatch} from "redux";
import {ActualiWidgetdata} from "../AppTypes";

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

export const changeUserStatusToNew = ()=>{
    return {
        status : LoggedUserStatus.FIRST_LOGIN
    }
}

 export const changeUserStatusToExist = ()=>{
    return {
        status : LoggedUserStatus.EXIST
    }
 }

 const fetchDataRequest = ()=>{
    return{
        type: FETCH_DATA_REQUEST,
        loading:true
    }
 }
const fetchDataError = (message:string)=>{
    return{
        type: FETCH_DATA_REQUEST,
        loading:false,
        error:message
    }
}


const fetchDataSuccess = (data:any) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        loading:false,
        data:data

     }
 }

 export const  fetchData = (query:string)=>(dispatch:Dispatch)=>{
    dispatch(fetchDataRequest());
    axios.get('').then((res)=>{
        dispatch(fetchDataSuccess(res));
    }).catch(err=>{
        dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    })
}
