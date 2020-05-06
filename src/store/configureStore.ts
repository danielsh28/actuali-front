import {combineReducers, createStore} from 'redux';
import { fetchDataReducer } from './reducers/FetchDataReducer';
import {userStateReducer} from "./reducers/UserStatusReducer";
import {appHeightReducer} from "./reducers/AppHeightReducer";


export const rootReducer  = combineReducers({
    appHeightReducer:appHeightReducer,
    userStateReducer:userStateReducer,
    fetchDataReducer:fetchDataReducer
})
export default function configureStore (){
    return createStore(rootReducer);
}
export type RootState = ReturnType<typeof rootReducer>
