import React, {useState,CSSProperties} from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import ActualiWidgetTamplate from './tamplets/DataDashboard/ActualiWidgetTamplate';
import LandPageTemplate from './tamplets/LandingPage/LandingPage';
import './App.css';
import {connect} from "react-redux";
import  {RootState} from "../store/configureStore";
import {AppHeight,LoggedUserStatus} from "../store/types";
import {IAppProps} from "../AppTypes";


const App: React.FC<IAppProps> = ({appHeight,userStatus}) => {
    const styles = {
        main:{
            height : appHeight,
        }
    }
    console.log(appHeight);
  return (
    <div className="App" style={styles.main}>
        <Switch>
        <Route  exact path={'/'} render= {()=> <LandPageTemplate/>}/>
        <Route path={`/userDashboard`} render = { () => <ActualiWidgetTamplate/>}/>
        </Switch>
    </div>
  );
};

const mapStateToProps =  (state :RootState)=>{
   return {
       appHeight:state.appHeighState.height};
};

export default connect(mapStateToProps)(App);
