import React, { Component } from 'react';
import App from 'grommet/components/App';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

class OptionControls extends Component {
  render() {
    return (
      <App>
        <Box direction='row' align='center'>
          <Button primary='true' label='Yes' />
          <Button critical='true' label='No' />
        </Box>
          <Button secondary='true' label='Customize' />
      </App>
    )
  }
}

export default OptionControls;
