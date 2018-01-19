import React, {Component} from 'react';

// ReactRouter
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// React components
import Inventory from './components/Inventory'
import ModeSelect from './components/ModeSelect'
import NavBar from './components/NavBar'
import ToothFooter from './components/ToothFooter'
import EntryShow from './components/EntryShow'
import EntryEdit from './components/EntryEdit'

// Grommet components
import App from 'grommet/components/App'

// Styles
import '../node_modules/grommet/grommet-hpinc.min.css'
import './App.css';

// Images

class HomeApp extends Component {

  state = {}

  render() {

    return (<Router>
      <div className='App'>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ModeSelect}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/entryedit" component={EntryEdit}/>
          <Route path="/entryshow" component={EntryShow}/>
        </Switch>
        <ToothFooter/>
      </div>
    </Router>);
  }
}

export default HomeApp;
