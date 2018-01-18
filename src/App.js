import React, { Component } from 'react';
import './App.css';
import { Title } from 'reactbulma';
import Image from 'grommet/components/Image'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Inventory from './components/Inventory'
import ModeSelect from './components/ModeSelect'
import NavBar from './components/NavBar'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import '../node_modules/grommet/grommet-hpinc.min.css'
import logo from './images/TCLogo.png'


class App extends Component {

state = {
}

  render() {

    return (
      <Router>
        <div className="App" centered='true' inline={true}>
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={ ModeSelect }/>
              <Route path="/inventory" component={ Inventory }/>
            </Switch>
          </div>
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
          </div>
        </Router>

    );
  }
}

export default App;
