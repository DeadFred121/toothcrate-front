// React Components
import React, {Component} from 'react';

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

// Internal Components
import OptionControls from './OptionControls';

class ProcEdit extends Component {
  render() {
    return (<App>
      <Headline>Add New Procedure</Headline>
      <TextInput placeHolder="Procedure Name"/>
      <Table>
        <TableHeader labels={['Item Name', 'Quantity', 'Delete Item']} />
        <tbody>
          <TableRow>
            <td>
              <Select placeHolder='Item Name'
                      inline={false}
                      multiple={false}
                      onSearch={true}
                      options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
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
        <Button accent='true' label='Add Item' fill='false'/>
      </Table>
      <hr />
      <Box className='ItemEditButtons' direction='row' align='stretch'>
        <Button className='modalButton1' primary='true' label='Submit' fill='true'/>
        <Button className='modelButton2' accent='true' label='Cancel' fill='true'/>
      </Box>
    </App>)
  }
}

export default ProcEdit;
