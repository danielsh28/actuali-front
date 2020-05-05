import {AppHeight, APP_HEIGHT_LOGIN, AppHeightActions, APP_HEIGHT_LANDING,UserStatus} from './types'

//action creator for changing app height
export const changeToLoginHeight = (height:AppHeight):AppHeightActions  =>{
    return {
        type : APP_HEIGHT_LOGIN,
    }
}
export const changeToLandingHeight = ()=> {
    return {
        type: APP_HEIGHT_LANDING
    }
}

export const changeUserStatusToNew = ()=>{
    return {
        status : UserStatus.FIRST_LOGIN
    }
}

 export const changeUserStatusToExist = ()=>{
    return {
        status : UserStatus.EXIST
    }
 }