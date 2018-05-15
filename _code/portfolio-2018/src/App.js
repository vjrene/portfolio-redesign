import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Photography from './Components/Work/Photography';

class App extends Component {
  render() {
    return (
      <div className="full-app--cntr">

        <Navigation />


        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/all-work' component={ Work } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/all-work/photography-page' component={ Photography } />

        </Switch>

      </div>
    );
  }
}

export default App;
