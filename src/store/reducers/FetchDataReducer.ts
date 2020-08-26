import {
  IFetchState,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  CLEAR_DATA,
} from "../types";

import { AnyAction } from "redux";

export const fetchDataReducer = (
  state: IFetchState = { loading: false, data: [], error: "" },
  action: AnyAction
) => {
  switch (action.type) {
    case CLEAR_DATA:
      state = { loading: false, data: [], error: "" };
      break;
    case FETCH_DATA_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case FETCH_DATA_SUCCESS:
      state = {
        ...state,
        data: action.payload.data,
        loading: false,
      };
      break;
    case FETCH_DATA_ERROR:
      state = {
        ...state,
        error: action.payload.data,
      };
  }
  return state;
};
