import {IUserStatusState, USER_STATUS_EXIST, USER_STATUS_NEW, LoggedUserStatus, LoggedUserStatusActions} from '../types'
export const userStateReducer = (state :IUserStatusState = {status:LoggedUserStatus.FIRST_LOGIN}, action : LoggedUserStatusActions) =>{
    switch (action.type) {
        case USER_STATUS_NEW:
            state= {
                ...state,
                status: LoggedUserStatus.FIRST_LOGIN,
            }
            break;
        case USER_STATUS_EXIST:
            state = {
                ...state,
                status:LoggedUserStatus.EXIST,
            }
            break;

    }
    return state;
}
