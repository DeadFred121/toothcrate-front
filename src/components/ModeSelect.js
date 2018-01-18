import React, {Component} from 'react';
import Headline from 'grommet/components/Headline';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

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

    const {procSelect} = this.state

    return (<div className="ProcInvSelector">
      <Headline align="center" size="large" onClick={this.showSearch}>
        Procedures
      </Headline>
      {
        procSelect && <Box pad={{
              "between" : "small"
            }} align='center'>
            <Animate enter={{
                "animation" : "fade",
                "duration" : 1000,
                "delay" : 0
              }} keep={true}>
              <SearchInput
                placeHolder='Search'
                suggestions={['Clean', 'Filling', 'Crown', 'Grillz']}
              />
            </Animate>
          </Box>

      }
      <hr />
      <Link to="/inventory">
        <Headline className="inv" align="center" size="large" >Inventory</Headline>
      </Link>
    </div>)
  }
}

export default ModeSelect;
