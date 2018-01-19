
// React Components
import React, {Component} from 'react';

// Grommet Components
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';

// Routing Components
import { Link } from 'react-router-dom';


class NavBar extends Component {

  render() {

    return (
      <App className="NavBar">
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
