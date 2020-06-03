import {CardMapFunction} from "../../AppTypes";
import {LoggedUserStatus, USER_ADD_TO_CHOICES, USER_STATUS_EXIST, USER_STATUS_NEW} from "../types";

export const changeUserStatusToNew = (mapFunc :CardMapFunction)=>{
    return {
        type : USER_STATUS_NEW ,
        payload : {
            status : LoggedUserStatus.FIRST_LOGIN,
            mapDataFunc:mapFunc
        }
    }
}

export const changeUserStatusToExist = (mapFunc :CardMapFunction)=>{
    return {
        type : USER_STATUS_EXIST,
        payload : {
            status:LoggedUserStatus.EXIST,
            mapDataFunc :mapFunc
        }
    }
}

export const addToUserChoices = (userChoice:string) =>{
    return{
        type:USER_ADD_TO_CHOICES,
        payload: userChoice
    }
}
