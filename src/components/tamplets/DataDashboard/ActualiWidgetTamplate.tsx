import React, {ReactElement, useEffect, useState} from 'react';
import {connect} from "react-redux";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {Redirect}  from 'react-router-dom'
import {fetchData} from "../../../store/actions/DataFetchingActions";
import {RootState} from "../../../store/configureStore";
import  styles from './ActualiWidgetTamplate.module.css';
import {ActualiWidgetdata} from "../../../AppTypes";
import {LoggedUserStatus} from "../../../store/types";
import ActuliHeader from '../../UI/organisms/Header/ActualiHeader';

interface IWidgetTemplate {
    getWidgets:Function,
    mapFunction :(value: ActualiWidgetdata, index: number, array: ActualiWidgetdata[]) => void,
    widgetsData :Array<ActualiWidgetdata>,
    isLogin : boolean,
    userStatus:LoggedUserStatus;
}

const ActualiWidgetTamplate :React.FC<IWidgetTemplate> =  function ({userStatus,getWidgets,mapFunction,widgetsData,isLogin}) {
       useEffect( ()=>{
           window.scrollTo(0, 0)
           if(userStatus === LoggedUserStatus.FIRST_LOGIN) {
               getWidgets('/web-api/choose-category');
           }
           else  {
               getWidgets('/web-api/user-dashboard');

           }
           },[isLogin]);
       ///if user not logged in - return to landing page
       if(isLogin){
           const cardList  = widgetsData.map(mapFunction);
           return (
               <div>
                   {
                       userStatus !== LoggedUserStatus.NOT_INITIALIZED  && (
                           userStatus === LoggedUserStatus.FIRST_LOGIN ?
                               <div>
                                   <ActuliHeader/>
                                   <h1>Actuali</h1>
                                   <h1>אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך</h1>
                               </div> : <div> Welcome back  User!</div>)
                   }
               <div className={`${styles.newsContainer}`}>
                   {cardList}
           </div>
               </div>
           )

       }
       else{
           return (<Redirect to={'/'}/>)
       }

};


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
    getWidgets : (query:string)=> dispatch(fetchData(query)),

});
const mapStateToProps = (state:RootState) =>({
    mapFunction : state.userState.mapFunc,
    widgetsData : state.fetchDataState.data,
    isLogin : state.userLoginStatus.isLogin,
    userStatus: state.userState.status
})
export  default connect(mapStateToProps,mapDispatchToProps)(ActualiWidgetTamplate);


