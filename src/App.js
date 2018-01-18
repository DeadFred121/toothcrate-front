import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Inventory from './components/Inventory'
import ModeSelect from './components/ModeSelect'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ModeSelect />
          <Switch>
            <Route path="/inventory" component={Inventory}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
