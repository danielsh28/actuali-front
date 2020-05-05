import {
    APP_HEIGHT_LANDING,
    APP_HEIGHT_LOGIN,
    AppHeight,
    AppHeightActions,
    IAppHeightState,
    IUserStatusState, USER_STATUS_EXIST,
    USER_STATUS_NEW,
    UserStatus,
    UserStatusActions
} from "./types";

export const appHeightReducer   = (state :IAppHeightState  = {height:AppHeight.LANDING},action : AppHeightActions) =>{
    switch (action.type) {
        case APP_HEIGHT_LOGIN:
            state = {
                ...state,
                height : AppHeight.DASHBOARD
            };
            break;
        case APP_HEIGHT_LANDING :
            state= {
                ...state,
                height : AppHeight.LANDING
            }
            break;
    }
    console.log('new App heighet is ' + state.height);
    return state;
}
export const userStateReducer = (state :IUserStatusState = {status:UserStatus.FIRST_LOGIN}, action : UserStatusActions) =>{
    switch (action.type) {
        case USER_STATUS_NEW:
            state= {
                ...state,
                status: UserStatus.FIRST_LOGIN,
            }
            break;
        case USER_STATUS_EXIST:
            state = {
                ...state,
                status:UserStatus.EXIST,
            }
            break;

    }
    return state;
}