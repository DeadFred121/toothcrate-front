import React, { Component } from 'react';
import './App.css';
import { Title, Field, Control, Input, Button } from 'reactbulma';
import Headline from 'grommet/components/Headline';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Inventory from './components/Inventory'
import ModeSelect from './components/ModeSelect'
import NavBar from './components/NavBar'
import Toothfooter from './components/ToothFooter'

import '../node_modules/grommet-css'

class App extends Component {

state = {
}

  render() {

    const { procSelect } = this.state

    return (
      <Router>
        <div className="App">
          <NavBar />
          <ModeSelect />
          <Switch>
            <Route path="/inventory" component={ Inventory }/>
          </Switch>
          <Toothfooter />
        </div>
      </Router>
    );
  }
}

export default App;
