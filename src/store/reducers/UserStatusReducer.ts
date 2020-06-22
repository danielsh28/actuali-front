import {
    IUserStatusState,
    LoggedUserStatus,
    LoggedUserStatusActions,
    USER_STATUS_EXIST,
    USER_STATUS_NEW,
    USER_TOGGLE_CHOICES
} from '../types';

const  initialState  : IUserStatusState = {
    status: LoggedUserStatus.NOT_INITIALIZED,
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

        case USER_TOGGLE_CHOICES: {
            state={
                ...state,
                categories:state.categories.indexOf(action.payload) ===-1? [...state.categories,action.payload]:
                    state.categories.filter(cat => cat !== action.payload)
            }
            console.log(state.categories);
        }
    }

    return state;
}
