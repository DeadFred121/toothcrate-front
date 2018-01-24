// React Components
import React from 'react';

import NewProcAddItem from './NewProcAddItem'

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';

const NewProc = ({ inventory, handleAddClick }) => {

    return (<App>
      <Headline>Add New Procedure</Headline>
      <TextInput id='NewProcSearchBar' placeHolder="Procedure Name"/>
      <NewProcAddItem inventory={inventory} />
    <Box className='newProcButton'>
      <Button className='newProcAddItemButton' onClick={handleAddClick} accent='true' label='Add Item' fill={false} />
    </Box>
      <Box className='ItemEditButtons' direction='row' align='stretch'>
        <Button type='submit' onClick={''} className='modalButton1' primary='true' label='Submit' fill='true'/>
        <Button path='/' className='modalButton2' accent='true' label='Cancel' fill='true'/>
      </Box>
    </App>
  )
}

export default NewProc;
