import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import BlogCard from './components/BlogCard';

library.add(fab, faEnvelope);


class Home extends React.Component {
  render() {
    return(
      <div>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <h2 style={{ margin: '25px' }}>
            Projects
        </h2>
        <Projects apiCall="/projects/"/>
        <BlogCard apiCall="/posts/"/>
      </div>
    );
  }
}

export default Home;
