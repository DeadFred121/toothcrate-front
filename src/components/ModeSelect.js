
// React Components
import React, {Component} from 'react';

// Grommet Components
import Headline from 'grommet/components/Headline';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import App from 'grommet/components/App';
import Image from 'grommet/components/Image';

// Assets
import logo from '../images/TCLogo.png'

// Routing Components
import { Link } from 'react-router-dom';


class ModeSelect extends Component {

  state = {
    // procedure search enable/disable
    procSelect: false
  }

  showSearch = () => {
    console.log('State Changed!')
    this.setState(prevState => ({
      procSelect: !prevState.procSelect
    }))
  }

  render() {

    const {procSelect} = this.state

    return (<App>
                <Image src={logo} size='med'/>
      <Headline align="center" size="med" onClick={this.showSearch}>
        Procedures
      </Headline>
      {
        procSelect && <Box pad={{
              "between" : "small"
            }} align='center'>
            <Animate enter={{
                "animation" : "fade",
                "duration" : 750,
                "delay" : 0
              }} keep={true}>
              <SearchInput
                placeHolder='Search'
                suggestions={['Clean', 'Filling', 'Crown', 'Grillz']}
                size="med"
              />
            </Animate>
          </Box>

      }
      <hr />
      <Link to="/inventory">
        <Headline className="invTitle" align="center" size="med">Inventory</Headline>
      </Link>
    </App>)
  }
}

export default ModeSelect;
