import React, {useEffect} from 'react';
import {Route, Switch,} from 'react-router-dom';
import ActualiWidgetTamplate from './components/UI/organisms/WidgetTemplate/ActualiWidgetTamplate';
import LandPageTemplate from './components/tamplets/LandingPage/LandingPage';
import {connect} from "react-redux";
import {RootState} from "./store/configureStore";
import {LoggedUserStatus} from "./store/types";
import {IAppProps} from "./AppTypes";
import styles from './App.module.scss';
import NewsDashboard from "./components/tamplets/NewsDashboard/NewsDashbord";


const App: React.FC<IAppProps> = ({appHeight,userStatus,isUserLogged}) => {
    const mainStyles = {
        main:{
            height : appHeight,
        }
    }

  return (
    <div className= {styles.App} style={mainStyles.main}>
        <Switch>
        <Route  exact path={'/'} render= {()=> <LandPageTemplate/>}/>
        <Route path={`/(userDashboard|choose-news)`} render = { () => <NewsDashboard/>}/>
        </Switch>
    </div>
  );
};

const mapStateToProps =  (state :RootState)=>{
   return {
       appHeight: state.userLoginStatus.height,
       isUserLogged: state.userLoginStatus.isLogin,
       userStatus : state.userStatus.status
   }
};

export default connect(mapStateToProps)(App);
