import React from 'react';
import CardList from './UI/organisms/news-card-container';
import LandPageTamplate from './tamplets/LandingPage/LandingPage';

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<CardList/>*/}
      <LandPageTamplate/>
    </div>
  );
};

export default App;
