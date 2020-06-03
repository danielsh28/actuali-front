import React, {ReactElement, useEffect, useState} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect} from "react-redux";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {Redirect}  from 'react-router-dom'
import {fetchData} from "../../../store/actions/DataFetchingActions";
import {RootState} from "../../../store/configureStore";
import  styles from './ActualiWidgetTamplate.module.css';
import {ActualiWidgetdata} from "../../../AppTypes";

interface IWidgetTemplate {
    getWidgets:Function,
    mapFunction :(value: ActualiWidgetdata, index: number, array: ActualiWidgetdata[]) => void,
    widgetsData :Array<ActualiWidgetdata>,
    isLogin : boolean
}

const ActualiWidgetTamplate :React.FC<IWidgetTemplate> =  function ({getWidgets,mapFunction,widgetsData,isLogin}) {
       useEffect( ()=>{
           getWidgets('/web-api/choose-category');
           //if(userStatus===LoggedUserStatus.EXIST)
           //dispatch(fetchData('/web-api/choose-category'));
           },[isLogin]);
       ///if user not logged in - return to landing page
       if(isLogin){
           const cardList  = widgetsData.map(mapFunction);
           return (<Container className={`${styles.newsContainer} align-items-strech`}>
               <Row >
                   {cardList}
               </Row>
           </Container>)

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
    isLogin : state.userLoginStatus.isLogin

})
export  default connect(mapStateToProps,mapDispatchToProps)(ActualiWidgetTamplate);


