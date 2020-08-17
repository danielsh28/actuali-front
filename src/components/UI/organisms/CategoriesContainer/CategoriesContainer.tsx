import React, {useEffect} from "react";
import { MIN_CATEGORIES_NUM } from "../../../../utils/app-constants";
import { INewsData, NewsCard } from "../../molecules/ActualiCards/NewsCard";
import {ActualiWidgetdata, CardMapFunction} from "../../../../AppTypes";
import styles from "../NewsContainer/NewsContainer.module.css";
import {Redirect} from "react-router-dom";
import {RootState} from "../../../../store/configureStore";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchData} from "../../../../store/actions/DataFetchingActions";
import {connect} from "react-redux";
import ActualiSignUpHeader from "../Header/ActualiSignUpHeader";

interface ICatProps {
  categories: Array<string>;
  widgetsData: Array<ActualiWidgetdata>;
  isLogin:boolean;
  mapFunction :CardMapFunction,
  getWidgets : Function,
  isLoading : boolean
}

const CategoriesContainer: React.FC<ICatProps> = ({isLoading, mapFunction,isLogin,widgetsData,getWidgets}) => {

  useEffect(()=>{
    getWidgets('/api/choose-category');
  },[])

  if(isLogin){

    return (
        <React.Fragment>
          { isLoading ?
                <div className={styles.loader}> </div> :
                <React.Fragment>
              <ActualiSignUpHeader/>
            <div  className={`${styles.mainContainer} container`}>
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
  isLoading:state.fetchDataState.loading

});


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState,{},AnyAction>)=> ({
  getWidgets : (query:string)=> dispatch(fetchData(query)),

});


export default connect(mapStateToProps,mapDispatchToProps)(CategoriesContainer);
