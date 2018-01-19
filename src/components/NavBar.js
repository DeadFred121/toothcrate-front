import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import { Link } from 'react-router-dom';

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';

class NavBar extends Component {

  render() {

    return (
      <App className="NavBar">
      <Header fixed={true}>
        <Title>
          <Anchor href="/">Home</Anchor>
        </Title>
        <Box flex={true} justify='end' direction='row' responsive={false}>
          <Menu icon={<MenuIcon />} dropAlign={{
              "right" : "right"
            }}>
            <Anchor href='/entryedit'>
              + New Procedure
            </Anchor>
            <Anchor href='/inventory'>
              + New Inventory Item
            </Anchor>
            <Anchor href='/entryshow'>
              + Orders
            </Anchor>
            <Anchor href='/entryshow'>
              + Stock Update
            </Anchor>
          </Menu>
        </Box>
      </Header>
    </App>
  )}
}



export default NavBar;
