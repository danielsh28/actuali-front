import {AppHeight, IAppHeightAction,APP_HEIGHT_LOGIN,IAppHeightState} from "./types";

export const appHeightReducer   = (state :IAppHeightState  = {height:'200vh'},action : IAppHeightAction) =>{
    switch (action.type) {
        case APP_HEIGHT_LOGIN:
            state = {
                ...state,
                height : action.payload
            };
            break
    }
    console.log('new App heighet is ' + state.height);
    return state;
}