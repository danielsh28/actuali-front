
export type AppHeight = '100vh' | '200vh';

export const APP_HEIGHT_LOGIN = '[APP] HEIGHT LOGIN';

export interface IAppHeightAction {
    type: typeof APP_HEIGHT_LOGIN;
    payload: AppHeight;

}

export interface IAppHeightState
{
    height:AppHeight
}
