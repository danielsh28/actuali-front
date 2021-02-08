import {
  CLEAR_DATA,
  dataType,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FetchActionsTypes,
  IFetchState,
} from "../types";

const INITIAL_FETCH_STATE  : IFetchState = {
  loading :false,
    newsData : [],
    categoriesData : [],
  error : ''
}
export const fetchDataReducer = (
  state: IFetchState = INITIAL_FETCH_STATE,
  action: FetchActionsTypes
) => {
  switch (action.type) {
    case CLEAR_DATA:
      state = INITIAL_FETCH_STATE;
      break;
    case FETCH_DATA_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case FETCH_DATA_SUCCESS:
      if(action.dataType === dataType.CATEGORIES) {

        state = {
          ...state,
          categoriesData: action.payload.categoriesData!,
          loading: false,
        };
      }
        else {
          state = {
            ...state,
            newsData: action.payload.newsData!,
            loading: false,
          };

        }
      break;
    case FETCH_DATA_ERROR:
      state = {
        ...state,
        error: action.payload,
      };
  }
  return state;
};
