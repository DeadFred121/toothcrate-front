// React Components
import React from 'react';

// Routing Components
import {
  withRouter,
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
import Anchor from 'grommet/components/Anchor';

// Assets
import logo from '../images/TCLogo.png'

const ModeSelect = ({ showSearch, procSelect, procedureNames, procSearchValue, updateProcSearchId, procSelectId, redirect, handleClickInventoryRedirect }) => {

  return (
    <App>
      {
        redirect && <Redirect to={ redirect } />
      }
      <Image id='mainlogo' src={logo} size='small' />
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
              keep={true}
            >
              <SearchInput 
                onSelect={ updateProcSearchId } 
                id='procSearchBar' 
                placeHolder='Select procedure' 
                suggestions={ procedureNames }
              />
              <br/>
            </Animate>
          </Box>
      }
      <hr className='hrSearch'/>
      <Box>
        <Headline className="invTitle" onClick={handleClickInventoryRedirect}>
          Inventory
        </Headline>
        <Anchor icon={<ClipboardIcon />} path='/inventory/' primary={true} label='Show complete list of inventory items'>
        </Anchor>
      </Box>
  </App>)
}

export default withRouter(ModeSelect);
