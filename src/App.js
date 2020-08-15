import React from 'react';
import './App.css';
import CardInfo from './Components/CardInfo';
import Header from './Components/Header';
import CountriesByTotal from './Components/CountriesByTotal';

const App = () => {

  return (
    <div className="App">
      <Header />
      <CardInfo />
      <CountriesByTotal />
    </div>
  );
}

export default App;
