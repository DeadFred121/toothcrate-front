// React Components
import React, { Component } from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';

// Internal Components
import NewProcAddItem from './NewProcAddItem';


class NewProc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemCount: 1

    };
  }

  handleAddClick = () => {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }

  render () {

    const { inventory, newProcSubmit } = this.props

    return (
      <App>
        <Headline>Add New Procedure</Headline>
        <form onSubmit={newProcSubmit}>
        <Box>
          <Box className='StockSearchBar'>
            <TextInput
              placeHolder="Procedure Name"
              name='name'
            />
          </Box>
            {
              [...Array(this.state.itemCount)].map((value, key) => <NewProcAddItem inventory={inventory} key={key} />)
            }

            <Box className='newProcButton'>
              <Button className='newProcAddItemButton' onClick={this.handleAddClick} accent={true} label='Add Item' fill={false} />
            </Box>
            <hr />
            <Box className='ItemEditButtons' direction='row' align='stretch'>
              <Button type='submit' className='modalButton1' primary={true} label='Submit' fill={true}/>
              <Button path='/' className='modalButton2' accent={true} label='Cancel' fill={true}/>
            </Box>
          </Box>
        </form>
      </App>
    )
  }
}

export default NewProc;
