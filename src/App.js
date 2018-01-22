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
import NewItem from './components/NewItem'
import LoginForm from 'grommet/components/LoginForm';

// API/Axios
import { api, setJwt } from './api/init';

class App extends Component {

state = {
  inventory: [],
  selectItem: null,
  inventoryItem: [],
  selectProc: [],
  token: null
}

  onLoginSubmitHandler = ({ username, password }) => {
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
  }

  render() {

    const { inventory, selectItem, inventoryItem } = this.state

    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Box className='Contents'>
            { !this.state.token ? <LoginForm onSubmit={this.onLoginSubmitHandler} align='start'/> :
              <Switch>
              <Route exact path="/" component={ ModeSelect }/>
              <Route path="/newitem"
                     component={() => <NewItem
                     updateInventory={ this.updateInventory }
                     inventory={ inventory }
                     /> }
              />
              <Route path="/itemedit" component={() => <ItemEdit
                     inventoryItem={ inventoryItem }
                     inventory={ inventory }
                     displayModal= { this.displayModal }
                     /> }
              />
              <Route path="/inventory" component={() => <Inventory
                     inventory={ inventory }
                     selectItem={ selectItem }
                     inventoryItem={ inventoryItem }
                     displayModal={ this.displayModal }
                     hideModal={ this.hideModal }
                     /> }
              />
              <Route path="/procshow" component={ ProcShow }/>
              <Route path="/procedit" component={() => <ProcEdit
                     inventory={ inventory }
                     /> }
              />
              <Route path="/order" component={() => <Order
                     inventory={ inventory }
                     /> }
              />
              <Route path="/stock" component={() => <Stock
                     inventory={ inventory }
                     /> }
              />
            </Switch>
            }
            </Box>
          <FooterBar />
          </div>
        </Router>
    );
  }

  updateInventory = (invItem) => {
    const inventory = [...this.state.inventory]
    inventory.push(invItem)
    this.setState({ inventory })
  }

  // Function
  displayModal = (item) => {
    this.setState({selectItem: item._id, inventoryItem: item})
  }

  // onClose function to close Inventory Item modal
  hideModal = () => {
    this.setState({selectItem: null})
  }

  // Rendering API Inventory request.
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        token: token
      });
    }

    api.get('/api/inventory').then(res => {
      const inventory = res.data
      this.setState({inventory})
    })

    api.get('/api/procedure').then(res => {
      const procedures = res.data.map(procedure => {
        return procedure.name
      })
      this.setState({procedures})
    })
  }
}

export default App;
