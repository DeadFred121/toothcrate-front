
// React Components
import React, { Component } from 'react';

// Grommet Components
import App from 'grommet/components/App';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
// import Select from 'grommet/components/Select';
import NumberInput from 'grommet/components/NumberInput';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

// Internal Components
import ControlledSelect from '../components/ControlledSelect';

class NewProcAddItem extends Component {

  render () {

    const { inventory } = this.props
    const itemSelection = inventory.map(item => ({value: item._id, label: item.name}))

    return (
      <App>
        <Table>
          <TableHeader labels={['Item Name', 'Quantity', 'Delete Item']} />
          <tbody>
            <TableRow>
              <td>
                <ControlledSelect
                  name='item[]'
                  placeHolder='Item'
                  options={itemSelection}
                />
              </td>
              <td>
                <NumberInput
                  className='NewProcNumInput'
                  defaultValue={1}
                  step={1}
                  min={0}
                  name='quantity[]'
                />
              </td>
              <td>
                <Box className='NewProcDeleteItemButton' >
                  <Button icon={<FormCloseIcon colorIndex='light-1' />} accent={true}/>
                </Box>
              </td>
            </TableRow>
          </tbody>
        </Table>
      </App>
    )
  }
}

export default NewProcAddItem;
