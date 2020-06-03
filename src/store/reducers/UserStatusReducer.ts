import {
    IUserStatusState,
    USER_STATUS_EXIST,
    USER_STATUS_NEW,
    LoggedUserStatus,
    LoggedUserStatusActions,
    USER_ADD_TO_CHOICES
} from '../types';

const  initialState  : IUserStatusState = {
    status:LoggedUserStatus.FIRST_LOGIN,
    mapFunc:()=>{},
    categories:[]
};

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

            state = {
                ...state,
                mapFunc: action.payload.mapDataFunc,
                status: LoggedUserStatus.EXIST,
            }
            break;
        }

        case USER_ADD_TO_CHOICES: {
            state={
                ...state,
                categories: [...state.categories,action.payload]
            }
            console.log(state.categories);
        }
    }

    return state;
}
