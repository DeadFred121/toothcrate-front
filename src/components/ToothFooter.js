import React, {Component} from 'react';

import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Image from 'grommet/components/Image'
import App from 'grommet/components/App'
import logo from '../images/TCLogo.png'

class ToothFooter extends Component {
  render() {
    return (<App className="ToothFooter">

      <Footer justify='between'>
        <Title>
          <s/>
          <a href="/"><Image src={logo} size='thumb'/>
          </a>
        </Title>
        <Box direction='row' align='center' pad={{
            "between" : "medium"
          }}>
          <Paragraph margin='none'>
            © 2017-2018 Invent/Story
          </Paragraph>
          <Menu direction='row' size='small' dropAlign={{
              "right" : "right"
            }}>
            <Anchor href='#'>
              Support
            </Anchor>
            <Anchor href='#'>
              Contact
            </Anchor>
            <Anchor href='#'>
              About
            </Anchor>
          </Menu>
        </Box>
      </Footer>
    </App>)
  }
}

export default ToothFooter;
