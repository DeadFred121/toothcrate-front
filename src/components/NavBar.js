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
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';

class NavBar extends Component {

  render() {

    return (
      <App className="NavBar">
        <Header fixed={true}
                float={false}
                splash={false}
                size='medium'>
          <Title>
            <Anchor icon={<LinkPreviousIcon />}
                    label='Home'
                    path='/'
                    primary={true}
                    reverse={false} />
          </Title>
          <Box flex={true} justify='end' direction='row' responsive={false}>
            <Menu icon={<MenuIcon />} dropAlign={{
                "right" : "right"
              }}>
              <Anchor path='/newproc'>
                + New Procedure
              </Anchor>
              <Anchor path='/newitem'>
                + New Inventory Item
              </Anchor>
              <Anchor path='/order'>
                + Orders
              </Anchor>
              {/* <Anchor path='/stock'>
                + Stock Update
              </Anchor> */}
            </Menu>
          </Box>
        </Header>
      </App>
  )}
}

export default NavBar;
