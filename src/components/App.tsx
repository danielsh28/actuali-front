import React, {useState,CSSProperties} from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import CardList from './tamplets/NewsContainer/ActualiWidgetTamplate';
import LandPageTemplate from './tamplets/LandingPage/LandingPage';
import './App.css';
import {connect} from "react-redux";
import  {RootState} from "../store/configureStore";
import {AppHeight,UserStatus} from "../store/types";

interface IAppProps {
    appHeight:AppHeight,
    userStatus : UserStatus,
    widgets : Array<>
}
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
        <Route path={`/user-dashboard/${':status'}`} render = { () => <CardList/>}/>
        </Switch>
    </div>
  );
};

const mapStateToProps =  (state :RootState)=>{
   return {
       appHeight:state.appHeightReducer.height};
};

export default connect(mapStateToProps)(App);
