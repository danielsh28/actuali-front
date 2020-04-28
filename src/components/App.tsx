import React, {useState,CSSProperties} from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import CardList from './UI/organisms/NewsContainer/NewsCardContainer';
import LandPageTemplate from './UI/organisms/LandingPage/LandingPage';
import './App.css';
import {connect} from "react-redux";
import  {RootState} from "../store/configureStore";
import {AppHeight} from "../store/types";

interface IAppProps {
    appHeight:AppHeight
}
const App: React.FC<IAppProps> = ({appHeight}) => {
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
        <Route path={'/userDashboard'} render = { () => <CardList/>}/>
        </Switch>
    </div>
  );
};

const mapStateToProps =  (state :RootState)=>{
   return { appHeight:state.appHeightReducer.height};
};

export default connect(mapStateToProps)(App);
