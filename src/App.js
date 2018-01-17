import React, { Component } from 'react';
import './App.css';
import { Title, Field, Control, Input, Button } from 'reactbulma';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Inventory from './components/Inventory'


class App extends Component {


state = {
  // procedure search enable/disable
  procSelect: false
}

showSearch = () => {
  console.log('State Changed!')
  this.setState(prevState => ({
    procSelect: !prevState.procSelect
  }))
}

  render() {
    
    const { procSelect } = this.state

    return (
      <Router>
        <div className="App">
          <div className="ProcInvSelector">
            <Title onClick={this.showSearch}>Procedures</Title>
            {
              procSelect &&
              <Field hasAddons>
                <Control>
                  <Input placeholder="Enter the name of a procedure:" />
                </Control>
                <Control>
                  <Button info>
                    Search
                  </Button>
                </Control>
              </Field>
            }
            <hr/>
              <Link to="/inventory"><Title>Inventory</Title></Link>
          </div>

          <Switch>
            <Route path="/inventory" component={Inventory}/>
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
