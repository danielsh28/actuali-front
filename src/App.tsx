import React from "react";
import { Route, Switch } from "react-router-dom";
import LandPageTemplate from "./components/tamplets/LandingPage/LandingPage";
import { connect } from "react-redux";
import { RootState } from "./store/configureStore";
import styles from "./App.module.scss";
import HomePage from "./components/tamplets/NewsDashboard/HomePage";
import { IAppProps } from "./AppTypes";

const App: React.FC<IAppProps> = ({ appHeight }) => {
  const mainStyles = {
    main: {
      height: appHeight,
    },
  };

  return (
    <div className={styles.App} style={mainStyles.main}>
      <Switch>
        <Route exact path={"/"} render={() => <LandPageTemplate />} />
        <Route
          path={`/(userDashboard|choose-news)`}
          render={() => <HomePage />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    appHeight: state.userLoginStatus.height,
    isUserLogged: state.userLoginStatus.isLogin,
    userStatus: state.userStatus.status,
  };
};

export default connect(mapStateToProps)(App);
