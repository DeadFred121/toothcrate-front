
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

// API
import { api } from '../api/init';


class ModeSelect extends Component {

  state = {
    // procedure search enable/disable
    procSelect: false,
    procedures: ['Clean', 'Filling', 'Crown', 'Grillz']
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
              <SearchInput id='procSearch'
                placeHolder='Search'
                suggestions={this.state.procedures}
                size="large"
              />
            </Animate>
          </Box>

      }
      <hr className='hrSearch' />
      <Link to="/inventory">
        <Headline className="invTitle" align="center" size="med">Inventory</Headline>
      </Link>
    </App>)
  }

  // Mapping through Procedures returned from API
  componentDidMount = () => {
    api.get('/api/procedure').then(res => {
      const procedures = res.data.map(procedure => {
        return procedure.name
      })
      this.setState({
        procedures
      })
    })
  }

}

export default ModeSelect;
