import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import MainSplash from './components/MainSplash'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Inquiry from './components/Inquiry'

import LinkedIn from './imgs/navPics/linkedin.png'
import GitHub from './imgs/navPics/github.png'
import email from './imgs/navPics/email.png'


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

function App() {
  return (
    <div className="App">
        <div className="main_nav_div">
          <a><img className="navButtons"src={LinkedIn}/></a>
          <a><img className="navButtons"src={email}/></a>
          <a><img className="navButtons"src={GitHub}/></a>
        </div>
        <Route render={({location}) => (
          <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
            >
            <Switch location={location}>
              <Route exact path = "/" component={MainSplash}/>
              <Route path = "/projects" component={Projects}/>
              <Route path = "/resume" component={Resume}/>
              <Route path = "/inquiry" component={Inquiry}/>
            </Switch>
          </CSSTransition>
          </TransitionGroup>
        )}/>
    </div>
  );
}

export default App;
