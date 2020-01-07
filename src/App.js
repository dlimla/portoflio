import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import MainSplash from './components/MainSplash'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Inquiry from './components/Inquiry'
import A2Z from './components/A2Z'
import PetMed from './components/PetMed'
import Taylor from './components/TaylorAsh'


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

function App() {
  return (
    <div className="App">
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
                <Route path = "/a2z" component={A2Z}/>
                <Route path = "/petmed" component={PetMed}/>
                <Route path = "/taylorAsh" component={Taylor}/>



              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
    </div>
  );
}

export default App;
