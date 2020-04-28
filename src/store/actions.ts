import {AppHeight,APP_HEIGHT_LOGIN,IAppHeightAction} from './types'

//action creator for changing app height
export const loginHeight = (height:AppHeight):IAppHeightAction  =>{
    return {
        type : APP_HEIGHT_LOGIN,
        payload : height
    }

}
