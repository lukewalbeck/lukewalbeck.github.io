import React from 'react';
import Recipes from './components/Recipes';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Recipes apiCall="/recipes/"/>
    </div>
  );
}

export default App;
