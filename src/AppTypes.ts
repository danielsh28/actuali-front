import {ICategoryData} from './components/UI/molecules/NewsCard/CategoryCard'
import {INewsData} from './components/UI/molecules/NewsCard/NewsCard'
import {AppHeight, LoggedUserStatus} from "./store/types";

export type ActualiWidgetdata = ICategoryData | INewsData;

export interface IAppProps {
    appHeight:AppHeight,
    userStatus : LoggedUserStatus,
    widgets : Array<ActualiWidgetdata>
}