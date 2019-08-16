import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Blog from './components/Blog';

const routing = (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/blog" component={() => <Blog apiCall="/posts/"/>}></Route>
            </Switch>      
        </div>
    </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
