// React Components
import React, {Component} from 'react';

// Routing Components
import {
  Redirect
} from 'react-router-dom';

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

const ModeSelect = ({ showSearch, procSelect, procedureNames, procSearchValue, updateProcSearchId, procSelectId, redirect }) => {

  return (
    <App>
      {
        redirect && <Redirect to={ redirect } />
      }
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
      <Headline className='ProcHeader' onClick={ showSearch }>
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
              <SearchInput onSelect={ updateProcSearchId } id='procSearchBar' placeHolder='Search procedures' suggestions={ procedureNames } />
              <br/>
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

export default ModeSelect;
