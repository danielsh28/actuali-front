import {combineReducers, createStore} from 'redux';
import {appHeightReducer,userStateReducer} from './reducers';

export const rootReducer  = combineReducers({
    appHeightReducer:appHeightReducer,
    userStateReducer:userStateReducer
})
export default function configureStore (){
    return createStore(rootReducer);
}
export type RootState = ReturnType<typeof rootReducer>
