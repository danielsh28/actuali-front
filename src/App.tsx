import React from 'react';
import { Route, Switch } from 'react-router-dom/';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { RootState } from './store/configureStore';
import styles from './App.module.scss';
import { IAppProps } from './AppTypes';
import { Redirect } from 'react-router-dom';
import NewsDashboard from './components/tamplets/ActualiWebSite/newDashboard';
import CategoryPanel from './components/tamplets/ActualiWebSite/CategoryPanel';

const App: React.FC<IAppProps> = ({ appHeight, cookies }) => {
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
        <Route exact path={`/`} render={() => <Redirect to={`/choose-news`} />} />
        <Route path={`/choose-news`} render={() => <CategoryPanel />} />
        <Route path={'/userDashboard'} render={() => <NewsDashboard />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    appHeight: state.userLoginStatus.height,
    isUserLogged: state.userLoginStatus.isLogin,
    userStatus: state.userStatus.status,
    cookies: ownProps.cookies,
  };
};

export default withCookies(connect(mapStateToProps)(App));
