import {ICategoryData} from './components/UI/molecules/ActualiCards/CategoryCard'
import {INewsData} from './components/UI/molecules/ActualiCards/NewsCard'
import {AppHeight, LoggedUserStatus} from "./store/types";

export type CardMapFunction = (value: any, index?: number, array?: ActualiWidgetdata[]) => unknown;
export type UsersChoicesMap =  Array<string>;
export type ActualiWidgetdata = ICategoryData | INewsData;

export interface IAppProps {
    appHeight:AppHeight,
    userStatus : LoggedUserStatus,
    widgets : Array<ActualiWidgetdata>,
    isUserLogged: boolean
}