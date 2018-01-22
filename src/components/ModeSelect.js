// React Components
import React, {Component} from 'react';

// Grommet Components
import Headline from 'grommet/components/Headline';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import App from 'grommet/components/App';
import Image from 'grommet/components/Image';
import ClipboardIcon from 'grommet/components/icons/base/Clipboard';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

// Assets
import logo from '../images/TCLogo.png'

// API
import {api} from '../api/init';

class ModeSelect extends Component {

  state = {
    // procedure search enable/disable
    procSelect: false,
    procedures: []
  }

  showSearch = () => {
    this.setState(prevState => ({
      procSelect: !prevState.procSelect
    }))
  }

  render() {

    const {procSelect, procedures} = this.state

    return (
      <App>
        <Animate enter={{
            "animation" : "fade",
            "duration" : 5000,
            "delay" : 0 }}
            keep={true}>
        <Image id='mainlogo' src={logo} size='med' />
      </Animate>
      <Animate enter={{
          "animation" : "fade",
          "duration" : 1000,
          "delay" : 0 }}
          keep={true}>
        <Headline className='ProcHeader'onClick={this.showSearch}>
          Procedures
        </Headline>

        {
          procSelect && <Box pad={{"between" : "small"}}
                             align='center'>
              <Animate enter={{
                  "animation" : "fade",
                  "duration" : 750,
                  "delay" : 0 }}
                  keep={true}>
                <SearchInput id='procSearchBar' placeHolder='Search procedures' suggestions={procedures} size="large"/>
                <br/>
                <Button label='Submit' path='/procshow' primary={true}/>
              </Animate>
            </Box>

        }
        <hr className='hrSearch'/>
        <Headline className="invTitle">
          Inventory
        </Headline>
        <Anchor icon={<ClipboardIcon />} path='/inventory/' primary={true} disabled={false} label='Show complete list of inventory items'>
        </Anchor>
      </Animate>
    </App>)
  }

  // Mapping through Procedures returned from API
  componentDidMount = () => {
    api.get('/api/procedure').then(res => {
      const procedures = res.data.map(procedure => {
        return procedure.name
      })
      this.setState({procedures})
    })
  }

}

export default ModeSelect;
