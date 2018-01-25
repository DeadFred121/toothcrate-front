// React Components
import React, { Component } from 'react';

// Grommet Components
import Box from 'grommet/components/Box'

// Styles
import './App.css';
import '../node_modules/grommet/grommet-hpinc.min.css'

// Routing Components
import { Route, Switch, withRouter } from 'react-router';

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
  loaded: 0,
  currentSupplierValue: {},
  newItemAlert: false,
  newItemAlertText: '',
  deleteItemAlert: false,
  deleteItemAlertText: ''
}

  render() {

    const { inventory, selectItem, inventoryItem, procedureNames, selectProc, procSelect, procSelectId, redirect, procedures, loaded, currentSupplierValue, newItemAlert, newItemAlertText, deleteItemAlert, deleteItemAlertText, editItemAlert, editItemAlertText, dentist, location } = this.state

    if (loaded < 2) return <LoadingPage />

    return (

      <div className='App'>
        <NavBar
          newItemAlert={newItemAlert}
          newItemAlertText={newItemAlertText}
          deleteItemAlert={deleteItemAlert}
          deleteItemAlertText={deleteItemAlertText}
          editItemAlert={editItemAlert}
          editItemAlertText={editItemAlertText}
          handleToastClose={this.handleToastClose}
        />
        <Box className='Contents'>
          { !this.state.token ? <Login onLoginSubmitHandler={this.onLoginSubmitHandler} align='center'/> :
          <Switch>
            <Route
              exact path="/" component={() => <ModeSelect
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
            <Route
              path="/newitem"
              component={() => <NewItem
              updateNewInventory={ this.updateInventory }
              inventory={ inventory }
              currentSupplierValue={ currentSupplierValue }
              selectInput={ this.selectInput }
              handleNewItemSubmit={ this.handleNewItemSubmit  }
            /> }
            />
            <Route
              path="/itemedit" component={() => <ItemEdit
              inventoryItem={ inventoryItem }
              inventory={ inventory }
              displayModal= { this.displayModal }
              updateExistingInventory={ this.updateExistingInventory }
              handleDelete={ this.handleDelete }
              handleItemSubmit={ this.handleItemSubmit }
            /> }
            />
            <Route
              path="/inventory" component={() => <Inventory
              inventory={ inventory }
              selectItem={ selectItem }
              inventoryItem={ inventoryItem }
              displayModal={ this.displayModal }
              hideModal={ this.hideModal }
            /> }
            />
            <Route
              path="/procshow" component={() => <ProcShow
              procSelectId={ procSelectId }
              cancelRedirect={ this.cancelRedirect }
              procedures={ procedures }
              inventory={ inventory }
              handleSubmitProcedureHistory={ this.handleSubmitProcedureHistory }
              dentist={ dentist }
              location={ location }
            /> }
            />
            <Route
              path="/newproc" component={() => <NewProc
              inventory={ inventory }
              newProcSubmit={this.newProcSubmit}
            /> }
            />
            <Route
              path="/procedit" component={() => <ProcEdit
              inventory={ inventory }
            /> }
            />
            <Route
              path="/order" component={() => <Order
              inventory={ inventory }
              updateSupplierSearchId={ this.updateSupplierSearchId }
            /> }
            />
            <Route
              path="/stock" component={() => <Stock
              inventory={ inventory }
              updateItemStock={ this.updateItemStock }
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

  handleToastClose = () => {
    this.setState({
      newItemAlert: false,
      newItemAlertText: '',
      deleteItemAlert: false,
      deleteItemAlertText: '',
      editItemAlert: false,
      editItemAlertText: ''
    })
  }

  handleSubmitProcedureHistory = (procedure, dentist, location) => {
    const procedurePackage = {
      dentist: dentist,
      procedure: procedure._id,
      location: location
    };
    api.post('/api/procedurehistory', procedurePackage)
      .then(res => {
        console.log(res);
        this.updateExistingInventory(res.data);
        this.props.history.push('/inventory');
        this.loadInventory();
        this.setState({
          newItemAlert: true,
          newItemAlertText: 'Procedure successfully logged'
        })
      }).catch(error => {
        console.log(procedurePackage)
        console.log(error);
        if (error.response.status === 401) {
          this.deleteToken()
        }
      });
      
  }

  // handleSubmitProcedure = (procedure) => {
  //   const procedurePackage = {
  //     name: procedure.name,
  //     items: procedure.items.map(item => {
  //       return {
  //         item: item._id,
  //         useQuantity: item.useQuantity
  //       }
  //     })
  //   };
  //   api.post('/api/procedurehistory', procedurePackage)
  //     .then(res => {
  //       console.log(res);
  //       this.updateExistingInventory(res.data);
  //       this.props.history.push('/inventory');
  //     })
  //     .catch(error => {
  //       console.log(procedurePackage)
  //       console.log(error);
  //     });
  // }

  handleItemSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const elements = form.elements
    const name = elements.name.value
    const code = elements.code.value
    const category = elements.category.value
    const supplier = elements.supplier.value
    const unit = elements.unit.value
    const cost = elements.cost.value
    const quantity = elements.quantity.value
    const parLevel = elements.parLevel.value

    api.put(`/api/inventory/${this.state.inventoryItem._id}`, {
      name,
      code,
      category,
      supplier,
      unit,
      cost,
      quantity,
      parLevel
    }).then(res => {
      this.updateExistingInventory(res.data);
      this.props.history.push('/inventory');
      this.loadInventory();
      this.setState({
        editItemAlert: true,
        editItemAlertText: 'An Inventory Item has been updated!'
      })
    }).catch(error => {
      console.log(error);
      if (error.response.status === 401) {
        this.deleteToken()
      }
    });
  }

  handleNewItemSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const elements = form.elements
    const name = elements.name.value
    const code = elements.code.value
    const category = elements.category.value
    const supplier = elements.supplier.value
    const unit = elements.unit.value
    const cost = elements.cost.value
    const quantity = elements.quantity.value
    const parLevel = elements.parLevel.value

    api.post('/api/inventory', {
      name,
      code,
      category,
      supplier,
      unit,
      cost,
      quantity,
      parLevel
    }).then(res => {
      this.setState({
        selectItem: null
      })
      this.updateNewInventory(res.data);
      this.props.history.push('/inventory');
      this.loadInventory();
      this.setState({
        newItemAlert: true,
        newItemAlertText: 'New Item created!'
      }).catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          this.deleteToken()
        }
      });
    })
  }

  handleDelete = (item_id) => {
    api.delete(`/api/inventory/${item_id}`)
      .then(() => {
        this.setState({
          selectItem: null
        })
        this.props.history.push('/inventory')
        this.loadInventory();
        this.setState({
        deleteItemAlert: true,
        deleteItemAlertText: 'Item has been deleted from the Inventory.'
      })
      }).catch((error) => {
        console.log('An error ocurred while deleting the item')
        console.log(error);
        if (error.response.status === 401) {
          this.deleteToken()
        }
      })
  }


  cancelRedirect = () => {
    this.state.redirect && this.setState({redirect: null})
  }

  updateProcSearchId = ({ suggestion }) => {
    this.setState({procSelectId: suggestion.value, redirect: '/procshow'})
  }

  newProcSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const elements = form.elements

    const items = document.getElementsByName('item[]')
    const quantities = document.getElementsByName('quantity[]')

    const procedure = {}
    procedure.name = elements.name.value
    procedure.items = []

    items.forEach((item, index) => {
      procedure.items.push({
        item: item.value,
        useQuantity: quantities[index].value
      })
    })

    api.post('/api/procedure', procedure).then(res => {
      this.updateExistingProcedures(res.data)
    }).catch(error => {
      console.log(error);
      if (error.response.status === 401) {
        this.deleteToken()
      }
    });
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

  selectInput = (event) => {
    this.setState({ currentValue: event.option })
  }

  updateItemStock = (invItem, quantity) => {
    console.log(invItem, quantity)
    const inventory = [...this.state.inventory]
    const itemIndex = inventory.findIndex(item => item._id === invItem._id)
    inventory[itemIndex].quantity = quantity
    this.setState({inventory})
    api.put(`/api/inventory/${invItem._id}`, inventory[itemIndex])
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

  updateExistingProcedures = (newProc) => {
    const procedures = [...this.state.procedures]
    procedures.unshift(newProc)
    this.setState({
      procedures
    })
    this.loadProcedureNames(procedures)
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
    }).catch(error => {
      console.log(error);
      if (error.response.status === 401) {
        this.deleteToken()
      }
    });
  }

  loadProcedures = () => {
    api.get('/api/procedure').then(res => {
     this.loadProcedureNames(res.data)
      this.setState({ procedures: res.data, loaded: this.state.loaded + 1 })
    }).catch(error => {
      console.log(error.response);
      if (error.response.status === 401) {
        this.deleteToken()
      }
    });
  }

  loadProcedureNames = (procedures) => {
    const procedureNames = procedures.map(procedure => {
      return { value: procedure._id, label: procedure.name }
    })
    this.setState({ procedureNames })
  }

  deleteToken = (token) => {
    this.setState({
      token: null
    })
  }

  // Rendering API Inventory request.
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        token: token
      });
      setJwt(token)
    }
    this.loadInventory();
    this.loadProcedures();
  }
}

export default withRouter(App);
