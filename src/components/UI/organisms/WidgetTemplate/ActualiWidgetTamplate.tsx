import React, {ReactElement, useEffect, useState} from 'react';
import {connect} from "react-redux";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {Redirect}  from 'react-router-dom'
import {RootState} from "../../../../store/configureStore";
import  styles from './ActualiWidgetTamplate.module.css';
import {ActualiWidgetdata} from "../../../../AppTypes";
import {LoggedUserStatus} from "../../../../store/types";

interface IWidgetTemplate {
    mapFunction :(value: ActualiWidgetdata, index: number, array: ActualiWidgetdata[]) => void,
    widgetsData :Array<ActualiWidgetdata>,
    isLogin : boolean,
}

const ActualiWidgetTamplate :React.FC<IWidgetTemplate> =  function ({mapFunction,widgetsData,isLogin}) {
       ///if user not logged in - return to landing page
       if(isLogin){
           const cardList  = widgetsData.map(mapFunction);
           return (
               <div>

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

const mapStateToProps = (state :RootState)=>({
  isLogin:state.userLoginStatus.isLogin,
  widgetsData: state.fetchDataState.data,
  mapFunction: state.userState.mapFunc,


})

export  default connect(mapStateToProps,null)(ActualiWidgetTamplate);


