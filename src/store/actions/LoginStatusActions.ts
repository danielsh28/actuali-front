import {USER_NOT_LOGGED, USER_LOGGED, AppHeight, LogUserActions} from "../types";

//action creator for changing app height
export const changeToLogin = (height:AppHeight):LogUserActions  =>{
    return {
        type : USER_LOGGED,
        payload:true
    }
}
export const changeToLogout = ()=> {
    return {
        type: USER_NOT_LOGGED,
        payload:false
    }
}