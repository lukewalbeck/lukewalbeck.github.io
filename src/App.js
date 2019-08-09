import React from 'react';
import Recipes from './Recipes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div class="App">
      <Header></Header>
      <Recipes apiCall="/recipes/"/>
    </div>
  );
}

export default App;
