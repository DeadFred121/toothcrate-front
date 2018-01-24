import React from 'react'

import App from 'grommet/components/App';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';

const LoadingPage = () => {

  return (

    <App>
      <Box className='LoadingPage'>
        <Spinning className='LoadingImage' size='large' />
        <Label size='medium'>
          Loading...
        </Label>
      </Box>
    </App>
  )
}
export default LoadingPage;
