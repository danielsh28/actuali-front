import { combineReducers, createStore } from 'redux';
import { fetchDataReducer } from './reducers/FetchDataReducer';
import { userStateReducer } from './reducers/UserStatusReducer';
import { appHeightReducer } from './reducers/AppHeightReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


export const rootReducer = combineReducers({
  userLoginStatus: appHeightReducer,
  userStatus: userStateReducer,
  fetchDataState: fetchDataReducer,
});
export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
export type RootState = ReturnType<typeof rootReducer>;
