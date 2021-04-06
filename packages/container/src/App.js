import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
