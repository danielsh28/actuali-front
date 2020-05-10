import {IUserStatusState, USER_STATUS_EXIST, USER_STATUS_NEW, LoggedUserStatus, LoggedUserStatusActions} from '../types';

const  initialState  : IUserStatusState = {status:LoggedUserStatus.FIRST_LOGIN,mapFunc:()=>{}};

export const userStateReducer = (state :IUserStatusState = initialState, action : LoggedUserStatusActions) =>{
    switch (action.type) {
        case USER_STATUS_NEW: {
            state = {
                ...state,
                mapFunc: action.payload.mapDataFunc,
                status: LoggedUserStatus.FIRST_LOGIN,
            }
            break;
        }
        case USER_STATUS_EXIST: {
        }
            state = {
                ...state,
                mapFunc: action.payload.mapDataFunc,
                status: LoggedUserStatus.EXIST,
            }
            break;
    }

    return state;
}
