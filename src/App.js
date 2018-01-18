import React, { Component } from 'react';
import './App.css';
import { Title, Field, Control, Input, Button } from 'reactbulma';
import Headline from 'grommet/components/Headline';
import Image from 'grommet/components/Image'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Inventory from './components/Inventory'
import ModeSelect from './components/ModeSelect'
import NavBar from './components/NavBar'
import Toothfooter from './components/ToothFooter'
import '../node_modules/grommet/grommet-hpinc.min.css'

class App extends Component {

state = {
}

  render() {

    const { procSelect } = this.state

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
