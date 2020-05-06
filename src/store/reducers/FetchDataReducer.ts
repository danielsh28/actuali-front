import {

    FetchActionsTypes,
    IFetchState,
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_REQUEST,
    IFetchSuccessAction, IFetchErrorAction
} from "../types";

export const fetchDataReducer = (state:IFetchState = {loading:false,data:[],error:''},action :FetchActionsTypes)=>{
switch (action.type) {
    case FETCH_DATA_REQUEST:
        state={
            ...state,
            loading:true
        }
        break;
    case FETCH_DATA_SUCCESS :
        state = {
            ...state,
            data:(action as IFetchSuccessAction) .payload
        }
        break;
    case FETCH_DATA_ERROR:
        state = {
            ...state,
            error: (action as IFetchErrorAction).payload
        }
    }
}

