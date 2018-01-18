import React, {Component} from 'react';
import Headline from 'grommet/components/Headline';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import App from 'grommet/components/App';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';

class NavBar extends Component {

  render() {

    return (<App className="NavBar">

      <Header fixed={true}>
        <Title>
          <Link to="/">Home</Link>
        </Title>
        <Box flex={true} justify='end' direction='row' responsive={false}>

          <Menu icon={<MenuIcon />} dropAlign={{
              "right" : "right"
            }}>
            <Anchor href='#' className='active'>
              + New Procedure
            </Anchor>
            <Anchor href='#'>
              + New Inventory Item
            </Anchor>
            <Anchor href='#'>
              + Orders
            </Anchor>
            <Anchor href='#'>
              + Stock Update
            </Anchor>
          </Menu>
        </Box>
      </Header>
    </App>
      )}
}



export default NavBar;
