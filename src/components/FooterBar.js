// React Components
import React, {Component} from 'react';

// Grommet Components
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

// Assets
import logo from '../images/TCLogo.png'

class FooterBar extends Component {

  render() {

    return (
      <App className="FooterBar">
        <Footer justify='between'>
          <Anchor href="/"><Image src={logo} size='thumb'/>
          </Anchor>
          <Box direction='row' align='center' pad={{
              "between" : "medium"
            }}>
            <Paragraph margin='none'>
              © 2017-2018 Invent/Story
            </Paragraph>
            <Menu direction='row' size='medium' dropAlign={{
                "right" : "right"
              }}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </App>
    )
  }
}

export default FooterBar;
