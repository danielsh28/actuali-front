import React, {useState,CSSProperties} from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import ActualiWidgetTamplate from './components/tamplets/DataDashboard/ActualiWidgetTamplate';
import LandPageTemplate from './components/tamplets/LandingPage/LandingPage';
import './App.css';
import {connect} from "react-redux";
import  {RootState} from "../src/store/configureStore";
import {AppHeight,LoggedUserStatus} from "../src/store/types";
import {IAppProps} from "../src/AppTypes";
import {Row} from "react-bootstrap";


const App: React.FC<IAppProps> = ({appHeight,userStatus,isUserLogged}) => {
    const styles = {
        main:{
            height : appHeight,
        }
    }
    console.log(appHeight);
  return (
    <div className="App" style={styles.main}>
        {isUserLogged &&
        <Container >
            <Row>Actuali</Row>
            <Row>אנא בחר לפחות 3 נושאים על מנת שנוכל להתאים את אקטואלי במיוחד עבורך</Row>
        </Container>}
        <Switch>
        <Route  exact path={'/'} render= {()=> <LandPageTemplate/>}/>
        <Route path={`/userDashboard`} render = { () => <ActualiWidgetTamplate/>}/>
        </Switch>
    </div>
  );
};

const mapStateToProps =  (state :RootState)=>{
   return {
       appHeight: state.userLoginStatus.height,
       isUserLogged: state.userLoginStatus.isLogin
   }
};

export default connect(mapStateToProps)(App);
