// React Components
import React from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import NumberInput from 'grommet/components/NumberInput';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Headline from 'grommet/components/Headline';
import Select from 'grommet/components/Select';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';

const ProcEdit = ({ inventory, handleAddClick }) => {
    return (<App>
      <Headline>Edit Procedure</Headline>
      <TextInput id='NewProcSearchBar' placeHolder="Procedure Name"/>
      <Table>
        <TableHeader labels={['Item Name', 'Quantity', 'Delete Item']} />
        <tbody>
          <TableRow>
            <td>
              <Select placeHolder='Item Name'
                      multiple={true}
                      onSearch={true}
                      options={
                        inventory.map(item => (item.name) )
                      }
                      // value={undefined}
                      // onChange={...}
              />
            </td>
            <td>
              <NumberInput className='NewProcNumInput'
                           defaultValue={1}
                           step={1}
                           min={0}
                         />
            </td>
            <td>
              <Button className='NewProcAddItem' icon={<FormCloseIcon colorIndex='light-1' />} accent="true"/>
            </td>
          </TableRow>
        </tbody>
        <Button onClick={handleAddClick} accent='true' label='Add Item' fill='false'/>
      </Table>
      <hr />
      <Box className='ItemEditButtons' direction='row' align='stretch'>
        <Button onClick={''} className='modalButton1' primary='true' label='Submit' fill='true'/>
        <Button path='/' className='modelButton2' accent='true' label='Cancel' fill='true'/>
      </Box>
    </App>
  )
}

export default ProcEdit;
