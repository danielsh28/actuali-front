import {CLEAR_DATA, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FetchActionsTypes} from "../types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import axios from "axios";
import {AnyAction} from "redux";
import {RootState} from "../configureStore";
import {ACTUALI_SERVER_BASE_URL} from "../../utils/app-constants";

axios.defaults.baseURL = ACTUALI_SERVER_BASE_URL;


const fetchDataRequest = ()=>{
    return{
        type: FETCH_DATA_REQUEST,
        payload:{loading:true}
    }
}
const fetchDataError = (message:string)=>{
    return{
        type: FETCH_DATA_REQUEST,
        payload:{
            loading:false,
            error:message}
    }
}


const fetchDataSuccess = (data: any) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {
            loading: false,
            data: data
        }

    }
}
{

}
export const clearData = () => {
    return {
        type: CLEAR_DATA,
        payload: {
            loading: false,
            data: [],
            error: ''
        }
    }

}
//  main action taht will be exposed to components.
export const  fetchData  = (query:string) : ThunkAction<void,RootState,unknown,FetchActionsTypes> => (dispatch:ThunkDispatch<RootState,{},AnyAction>) => {
    dispatch(fetchDataRequest());
    setTimeout(()=>{axios.get(query).then((res)=>{
        dispatch(fetchDataSuccess(res.data));
    }).catch(err=>{
        dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    })},2000);
}