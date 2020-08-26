import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { AnyAction } from "redux";
import queryString from "query-string";
import {
  CLEAR_DATA,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FetchActionsTypes,
} from "../types";

import { RootState } from "../configureStore";
import { ACTUALI_SERVER_BASE_URL } from "../../utils/app-constants";

axios.defaults.baseURL = ACTUALI_SERVER_BASE_URL;

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
  payload: { loading: true },
});
const fetchDataError = (message: string) => ({
  type: FETCH_DATA_REQUEST,
  payload: {
    loading: false,
    error: message,
  },
});

const fetchDataSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    loading: false,
    data,
  },
});

export const clearData = () => ({
  type: CLEAR_DATA,
  payload: {
    loading: false,
    data: [],
    error: "",
  },
});
//  main action taht will be exposed to components.
export const fetchNews = (
  params?: any
): ThunkAction<void, RootState, unknown, FetchActionsTypes> => (
  dispatch: ThunkDispatch<RootState, {}, AnyAction>
) => {
  dispatch(fetchDataRequest());
  axios
    .get(`/api/user-dashboard?${queryString.stringify(params)}`)
    .then((res) => {
      dispatch(fetchDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    });
};

export const fetchCategories = (): ThunkAction<
  void,
  RootState,
  unknown,
  FetchActionsTypes
> => (dispatch: ThunkDispatch<RootState, {}, AnyAction>) => {
  dispatch(fetchDataRequest());
  axios
    .get("/api/choose-category")
    .then((res) => {
      dispatch(fetchDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    });
};
