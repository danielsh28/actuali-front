import React, {useCallback, useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {Redirect}  from 'react-router-dom'
import {RootState} from "../../../../store/configureStore";
import  styles from './NewsContainer.module.css';
import {ActualiWidgetdata, CardMapFunction} from "../../../../AppTypes";
import {LoggedUserStatus} from "../../../../store/types";
import query from "query-string";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchData} from "../../../../store/actions/DataFetchingActions";
import ActualiUserHeader from "../Header/ActualiUserHeader";

interface INewsProps {
    getWidgets : CardMapFunction;
    mapFunction :(value: ActualiWidgetdata, index: number, array: ActualiWidgetdata[]) => void,
    widgetsData :Array<ActualiWidgetdata>,
    categories :Array<string>;
    isLogin : boolean,
    userStatus : LoggedUserStatus,
    isLoading:boolean
}

const NewsContainer :React.FC<INewsProps> =  function ({isLoading,categories,getWidgets,mapFunction,widgetsData,isLogin,userStatus}) {
    const [newsCounter,_setNewsCounter] = useState(5);
    const counterRef = useRef<number>(newsCounter);

    const setNewsCounter = (num:number) => {
        counterRef.current = num;
        _setNewsCounter(num);
    }


    const handleScroll = (event :Event ) => {
        event.preventDefault();
        const {clientHeight, scrollHeight ,scrollTop} = document.scrollingElement!;
        if (scrollHeight - scrollTop ===  clientHeight) {
                setNewsCounter(counterRef.current + 1);
                console.log(counterRef.current);
        }
    }

    useEffect(()=> {
       window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

    useEffect( () => {
        getWidgets(`/api/user-dashboard?${query.stringify({cat:categories,count:newsCounter})
            }`);
    }, [newsCounter,getWidgets,userStatus]);

    ///if user not logged in - return to landing page
       if(isLogin){
           return (
               <React.Fragment>
                   {
                       isLoading ? <div className={styles.loader}></div> :
                           <React.Fragment>
                           <ActualiUserHeader/>
                               <div>{`number of news Headlines :${newsCounter}`}</div>
                               <div className={`${styles.mainContainer} container`}>
                       {widgetsData.map(mapFunction)}
                       </div>
                           </React.Fragment>
                               }
               </React.Fragment>
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
  userStatus : state.userStatus.status,
  categories : state.userStatus.categories,
    isLoading:state.fetchDataState.loading
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
    getWidgets : (query:string)=> dispatch(fetchData(query)),

});

export  default connect(mapStateToProps,mapDispatchToProps)(NewsContainer);


