import React, {useState,CSSProperties} from 'react';
import CardList from './UI/organisms/NewsContainer/NewsCardContainer';
import LandPageTemplate from './UI/organisms/LandingPage/LandingPage';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


const App: React.FC = () => {
    const [isLogin,setIsLogin] = useState(false);
    const handleHeightChange = (isLogin:boolean) => {
        setIsLogin(isLogin);
    }
  return (
      <Router>
    <div className="App" style={ isLogin?{
        height:'100vh'
    }:{}}>
        <Switch>
        <Route  exact path={'/'} render= {()=> <LandPageTemplate onLogin={handleHeightChange} />}/>
        <Route path={'/userDashboard'} render = { () => <CardList/>}/>
        </Switch>
    </div>
      </Router>
  );
};

export default App;
