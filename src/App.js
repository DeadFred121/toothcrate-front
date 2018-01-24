// React Components
import React, { Component } from 'react';

// Grommet Components
import Box from 'grommet/components/Box'

// Styles
import './App.css';
import '../node_modules/grommet/grommet-hpinc.min.css'

// Routing Components
import {
  Route,
  Switch,
} from 'react-router-dom';
import { withRouter } from 'react-router';

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
import Login from './components/Login'
import NotFound from './components/NotFound'
import NewProc from './components/NewProc'
import LoadingPage from './components/LoadingPage'

// API/Axios
import { api, setJwt } from './api/init';

class App extends Component {

state = {
  inventory: [],
  selectItem: null,
  inventoryItem: [],
  selectProc: [],
  token: null,
  procedureNames: [],
  procSelect: false,
  procSelectId: null,
  redirect: null,
  procedures: [],
  supplierSelectId: null,
  loaded: 0
}

  render() {

    const { inventory, selectItem, inventoryItem, procedureNames, selectProc, procSelect, procSelectId, redirect, procedures, loaded } = this.state

     if (loaded < 2) return <LoadingPage />

    return (

        <div className='App'>
          <NavBar />
          <Box className='Contents'>
            { !this.state.token ? <Login onLoginSubmitHandler={this.onLoginSubmitHandler} align='center'/> :
            <Switch>
              <Route exact path="/" component={() => <ModeSelect
                     procedureNames={ procedureNames }
                     procSelect={ procSelect }
                     selectProc={ selectProc}
                     showSearch={ this.showSearch }
                     updateProcSearchId={ this.updateProcSearchId }
                     procSelectId={ procSelectId }
                     redirect={ redirect }
                     handleClickInventoryRedirect={ this.handleClickInventoryRedirect }
                     /> }
              />
              <Route path="/newitem"
                     component={() => <NewItem
                     updateNewInventory={ this.updateInventory }
                     inventory={ inventory }
                   /> }// IDEA: inventoryItem
              />
              <Route path="/itemedit" component={() => <ItemEdit
                     inventoryItem={ inventoryItem }
                     inventory={ inventory }
                     displayModal= { this.displayModal }
                     updateExistingInventory={ this.updateExistingInventory }
                     handleDelete={ this.handleDelete }
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
              <Route path="/procshow" component={() => <ProcShow
                     procSelectId={ procSelectId }
                     cancelRedirect={ this.cancelRedirect }
                     procedures={ procedures }
                     inventory={ inventory }
                     /> }
              />
              <Route path="/newproc" component={() => <NewProc
                     inventory={ inventory }
                     /> }
              />
              <Route path="/procedit" component={() => <ProcEdit
                     inventory={ inventory }
                     /> }
              />
              <Route path="/order" component={() => <Order
                     inventory={ inventory }
                     updateSupplierSearchId={ this.updateSupplierSearchId }
                     /> }
              />
              <Route path="/stock" component={() => <Stock
                     inventory={ inventory }
                     /> }
              />
              <Route component={NotFound} />
            </Switch>
            }
            </Box>
          <FooterBar />
          </div>

    );
  }

  handleClickInventoryRedirect = () => {
      this.props.history.push('/inventory');
  };

  handleAddItemClick () {
    this.setState(prevState => ({
      content: [...prevState.content, `More sample content ${prevState.content.length}`]
    }));
  }

  handleDelete = (item_id) => {
    api.delete(`/api/inventory/${item_id}`)
      .then(() => {
        this.setState({
          selectItem: null
        })
        this.props.history.push('/inventory')
        this.loadInventory();
      })
      .catch((err) => {
        console.log('An error ocurred while deleting the item')
      })
  }

  cancelRedirect = () => {
    this.state.redirect && this.setState({redirect: null})
  }

  updateProcSearchId = ({ suggestion }) => {
    this.setState({procSelectId: suggestion.value, redirect: '/procshow'})
  }

  updateSupplierSearchId = ({ suggestion }) => {
    console.log(suggestion)
    this.setState({supplierSelectId: suggestion.value, redirect: '/suppliershow'})
  }

  onLoginSubmitHandler = ({ username, password }) => {
    api.post('/auth', { email: username, password }).then(res => {
      this.setState({
        token: res.data.token
      })
      setJwt(res.data.token)
    })
  }

  showSearch = () => {
    this.setState(prevState => ({
      procSelect: !prevState.procSelect
    }))
  }

  updateNewInventory = (invItem) => {
    const inventory = [...this.state.inventory]
    inventory.push(invItem)
    this.setState({ inventory })
  }

  updateExistingInventory = (invItem) => {
    const inventory = [...this.state.inventory]
    const itemIndex = inventory.findIndex(item => item._id === invItem._id)
    inventory[itemIndex] = invItem
    this.setState({ inventory, inventoryItem: invItem })
  }

  // Function
  displayModal = (item) => {
    this.setState({selectItem: item._id, inventoryItem: item})
  }

  // onClose function to close Inventory Item modal
  hideModal = () => {
    this.setState({selectItem: null})
  }

  loadInventory = () => {
    api.get('/api/inventory').then(res => {
      const inventory = res.data
      this.setState({ inventory, loaded: this.state.loaded + 1 })
    })
  }

  loadProcedures = () => {
    api.get('/api/procedure').then(res => {
      const procedureNames = res.data.map(procedure => {
        return { value: procedure._id, label: procedure.name }
      })
      this.setState({ procedureNames, procedures: res.data, loaded: this.state.loaded + 1 })
    })
  }

  // Rendering API Inventory request.
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        token: token
      });
    }

    this.loadInventory();

    this.loadProcedures();
  }
}

export default withRouter(App);
