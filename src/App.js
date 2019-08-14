import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope);

function App() {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects apiCall="/projects/"/>
      <Blog apiCall="/posts/"/>
    </div>
  );
}

export default App;
