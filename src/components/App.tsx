import React from 'react';
import CardList from './UI/organisms/news-card-container';
import LandPageTemplate from './tamplets/LandingPage/LandingPage';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<CardList/>*/}
      <LandPageTemplate/>
    </div>
  );
};

export default App;
