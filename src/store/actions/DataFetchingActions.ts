import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import {AnyAction} from 'redux';
import queryString from 'query-string';
import {
  CLEAR_DATA,
  dataType,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FetchActionsTypes,
  IFetchSuccessAction,
  LOGIN_USER
} from '../types';
import {RootState} from '../configureStore';
import {ACTUALI_SERVER_BASE_URL, ACTUALI_SERVER_BASE_URL_DEV} from '../../utils/app-constants';
import {INewsData} from '../../components/UI/molecules/ActualiCards/NewsCard';
import {ICategoryData} from '../../components/UI/molecules/ActualiCards/CategoryCard';

console.log(`server an dev:  ${process.env.REACT_APP_BACK_DEV}`);
console.log(`browser:  ${process.env.BROWSER}`);
axios.defaults.baseURL =
  process.env.REACT_APP_BACK_DEV === 'true' ? ACTUALI_SERVER_BASE_URL_DEV : ACTUALI_SERVER_BASE_URL;

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

const fetchDataNewsSuccess = (newsData: INewsData[]) :IFetchSuccessAction=> ({
  type: FETCH_DATA_SUCCESS,
  dataType : dataType.NEWS,
  payload: {
    newsData,
  },
});
const fetchDataCategoriesSuccess  = (categoriesData: ICategoryData[]) :IFetchSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  dataType : dataType.CATEGORIES,
  payload: {
    categoriesData,
  },
});

export const clearData = () => ({
  type: CLEAR_DATA,
  payload: {
    loading: false,
    data: [],
    error: '',
  },
});

export const loginUserAction = (data: any) => ({
  type: LOGIN_USER,
  payload: {
    name: data.name,
    error: data.error,
  },
});
//  main action taht will be exposed to components.
export const fetchNews = (params?: any): ThunkAction<void, RootState, unknown, FetchActionsTypes> => (
  dispatch: ThunkDispatch<RootState, {}, AnyAction>,
) => {
  dispatch(fetchDataRequest());
  axios
    .get(`/api/user-dashboard?${queryString.stringify(params)}`)
    .then((res) => {
      dispatch(fetchDataNewsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    });
};

export const fetchCategories = (): ThunkAction<void, RootState, unknown, FetchActionsTypes> => (
  dispatch: ThunkDispatch<RootState, {}, AnyAction>,
) => {
  dispatch(fetchDataRequest());
  axios
    .get('/api/choose-category')
    .then((res) => {
      dispatch(fetchDataCategoriesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchDataError(`Error in data fetching from server: ${err}`));
    });
};

export const loginUser = (username: string, pwd: string): ThunkAction<any, any, any, any> => (
  dispatch: ThunkDispatch<RootState, {}, AnyAction>,
) => {
  dispatch(fetchDataRequest());
  axios.post('/auth/login', { username, pwd }).then((res) => {
    dispatch(loginUserAction(res.data));
  });
};
