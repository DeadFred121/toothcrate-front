// React Components
import React, { Component } from 'react';

// Grommet Components
import Box from 'grommet/components/Box'

// Styles
import './App.css';
import '../node_modules/grommet/grommet-hpinc.min.css'

// Routing Components
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Internal Components
import Inventory from './components/Inventory'
import ModeSelect from './components/ModeSelect'
import NavBar from './components/NavBar'
import ProcEdit from './components/ProcEdit'
import Order from './components/Order'
import Stock from './components/Stock'
import ItemEdit from './components/ItemEdit'
import ProcShow from './components/ProcShow'
import FooterBar from './components/FooterBar'
import LoginForm from 'grommet/components/LoginForm';


// API/Axios
import { api, setJwt } from './api/init';


class App extends Component {

state = {
  token: null
}

  render() {

    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Box className='Contents'>
            { !this.state.token ? <LoginForm onSubmit={({ username, password }) => {
              api.post('/auth', {
                email: username,
                password
              }
              ).then(res => {
                this.setState({
                  token: res.data.token
                })
                setJwt(res.data.token)
              })
            }} align='start'/> :
              <Switch>
                <Route exact path="/" component={ ModeSelect }/>
                <Route path="/itemedit" component={ ItemEdit }/>
                <Route path="/inventory" component={ Inventory }/>
                <Route path="/procshow" component={ ProcShow }/>
                <Route path="/procedit" component={ ProcEdit }/>
                <Route path="/order" component={ Order }/>
                <Route path="/stock" component={ Stock }/>
              </Switch>
            }
            </Box>
          <FooterBar />
          </div>
        </Router>
    );
  }
}

export default App;
