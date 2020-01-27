import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectJump from './components/ProjectJump';
import BlogJump from './components/BlogJump';


const routing = (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/projects" component={ProjectJump}></Route>
                <Route path="/blog" component={() => <BlogJump apiCall='/posts/'/>}></Route>
            </Switch>
        </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
