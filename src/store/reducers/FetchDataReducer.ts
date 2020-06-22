import {
    IFetchState,
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_REQUEST,
} from "../types";

import {AnyAction} from 'redux'

export const fetchDataReducer = (state:IFetchState = {loading:false,data:[],error:''},action :AnyAction)=>{
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
            data:action.payload.data
        }
        break;
    case FETCH_DATA_ERROR:
        state = {
            ...state,
            error:action.payload.data
        }
    }
    return state;
}

