import React from 'react';
import Recipes from './Recipes';
import './App.css';

function App() {
  return (
    <Recipes apiCall="/recipes/"/>
  );
}

export default App;
