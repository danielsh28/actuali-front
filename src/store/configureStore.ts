import {combineReducers, createStore} from 'redux';
import { fetchDataReducer } from './reducers/FetchDataReducer';
import {userStateReducer} from "./reducers/UserStatusReducer";
import {appHeightReducer} from "./reducers/AppHeightReducer";
import {applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


export const rootReducer  = combineReducers({
    appHeighState:appHeightReducer,
    userState:userStateReducer,
    fetchDataState:fetchDataReducer
})
export default function configureStore (){
    return createStore(rootReducer,applyMiddleware(thunk));
}
export type RootState = ReturnType<typeof rootReducer>
