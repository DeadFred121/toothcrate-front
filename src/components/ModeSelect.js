import React, { Component } from 'react';
import {
  Title,
  Field,
  Control,
  Input,
  Button
} from 'reactbulma';
import {
  Link
} from 'react-router-dom';


class ModeSelect extends Component {


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
        <hr />
        <Link to="/inventory"><Title>Inventory</Title></Link>
      </div>
    );
  }
}

export default ModeSelect;