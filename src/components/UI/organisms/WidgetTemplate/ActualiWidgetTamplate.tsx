import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Redirect}  from 'react-router-dom'
import {RootState} from "../../../../store/configureStore";
import  styles from './ActualiWidgetTamplate.module.css';
import {ActualiWidgetdata} from "../../../../AppTypes";
import {LoggedUserStatus} from "../../../../store/types";

interface IWidgetTemplate {
    mapFunction :(value: ActualiWidgetdata, index: number, array: ActualiWidgetdata[]) => void,
    widgetsData :Array<ActualiWidgetdata>,
    isLogin : boolean,
    userStatus : LoggedUserStatus
}

const ActualiWidgetTamplate :React.FC<IWidgetTemplate> =  function ({mapFunction,widgetsData,isLogin,userStatus}) {
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
  mapFunction: state.userStatus.mapFunc,
  userStatus : state.userStatus.status


})

export  default connect(mapStateToProps,null)(ActualiWidgetTamplate);


