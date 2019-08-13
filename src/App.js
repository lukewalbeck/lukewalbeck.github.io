import React from 'react';
import Recipes from './components/Recipes';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

function App() {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects apiCall="/projects/"/>
      <Recipes apiCall="/recipes/"/>
    </div>
  );
}

export default App;
