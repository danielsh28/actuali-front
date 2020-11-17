import React from "react";
import { Route, Switch } from "react-router-dom";
import LandPageTemplate from "./components/tamplets/LandingPage/LandingPage";
import { connect } from "react-redux";
import { withCookies } from 'react-cookie';
import { RootState } from "./store/configureStore";
import styles from "./App.module.scss";
import HomePage from "./components/tamplets/NewsDashboard/HomePage";
import { IAppProps } from "./AppTypes";

const App: React.FC<IAppProps> = ({ appHeight,cookies }) => {
  const mainStyles = {
    main: {
      height: appHeight,
    },
  };

  return (
    <div className={styles.App} style={mainStyles.main}>
      {
        //todo check if contain session cookie
      }
      <Switch>
        <Route exact path={"/(|login|signup)"} render = {() =>
            (<LandPageTemplate/>)}/>
        <Route
          path={`/choose-news`}
         render = {() => (<HomePage/>)}
        /><Route
          path={`/userDashboard`}
          render= {() => (<HomePage/>)}
      />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: RootState,ownProps : any) => {
  return {
    appHeight: state.userLoginStatus.height,
    isUserLogged: state.userLoginStatus.isLogin,
    userStatus: state.userStatus.status,
    cookies : ownProps.cookies
  };
};

export default withCookies(connect(mapStateToProps)(App));
