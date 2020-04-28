import {combineReducers, createStore} from 'redux';
import {appHeightReducer} from './reducers';

export const rootReducer  = combineReducers({
    appHeightReducer:appHeightReducer
})
export default function configureStore (){
    return createStore(rootReducer);
}
export type RootState = ReturnType<typeof rootReducer>
