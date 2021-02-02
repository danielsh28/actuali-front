import { ICategoryData } from "./components/UI/molecules/ActualiCards/CategoryCard";
import { INewsData } from "./components/UI/molecules/ActualiCards/NewsCard";
import { AppHeight, LoggedUserStatus } from "./store/types";
import Cookies from "universal-cookie";

export type CardMapFunction = (
  value: any,
  index?: number,
  array?: ActualiWidgetdata[]
) => unknown;

export type UsersChoicesMap = Array<string>;
export type ActualiWidgetdata = ICategoryData | INewsData;

export interface IAppProps {
  appHeight: AppHeight;
  cookies: Cookies;
}
