import React, {useEffect, useState} from 'react';
import {Container,Row} from 'react-bootstrap';
import {connect, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {fetchData} from "../../../store/actions";
import {RootState} from "../../../store/configureStore";
import  styles from './ActualiWidgetTamplate.module.css';
import {LoggedUserStatus} from "../../../store/types";
import {ActualiWidgetdata} from "../../../AppTypes";

/*interface IWidgetTemplate {
    getWidgets:Function,
    mapFunction :Function,
    widgetsData :Array<ActualiWidgetdata>
}*/

const ActualiWidgetTamplate :React.FC  =  function ({}){
    const  dispatch = useDispatch();
    useEffect( ()=>{
        //if(userStatus===LoggedUserStatus.EXIST)
        dispatch(fetchData('/web-api/choose-category'));
        },[]);

    const mapFunc = useSelector(function (state :RootState ){return state.userState.mapFunc});
    const widgetsData = useSelector(((state:RootState) => state.fetchDataState.data));
    // @ts-ignore
    const cardList  = widgetsData.map(mapFunc);
    return (<Container className={styles.newsContainer}>
            <Row className={'flex-row'}>
                    {cardList}
            </Row>
        </Container>
    );
};

/*
const mapDispatchToProps =  (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
    getWidgets : (query:string)=> dispatch(fetchData(query)),

});
const mapStateToProps = (state:RootState) =>({
    mapFunction : state.userState.mapFunc,
    widgetsData : state.fetchDataState.data

})*/
export  default ActualiWidgetTamplate;


