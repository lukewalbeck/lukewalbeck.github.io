import React from 'react';
import Recipes from './Recipes';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Recipes apiCall="/recipes/"/>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
