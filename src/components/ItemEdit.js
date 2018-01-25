// React Components
import React, { Component } from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';

// Internal Components
import ControlledSelect from '../components/ControlledSelect';

// Routing Components
import {
  Redirect
} from 'react-router-dom';

import { withRouter } from 'react-router';

// API
import {api} from '../api/init';

class ItemEdit extends Component {

  render() {

    const { inventory, inventoryItem, selectItem, hideModal, displayModal, updateExistingInventory, handleDelete, handleItemSubmit } = this.props

    // Mapping through the Inventory by Supplier and setting as an Array
    const itemSupplier = Array.from(new Set(inventory.map(item => (item.supplier))))
    // Mapping through the Inventory by Category and setting as an Array
    const itemCategory = Array.from(new Set(inventory.map(item => (item.category))))

    return (
      <App className="ItemEdit">
        <Headline>
          Edit Inventory Item
        </Headline>
        <form onSubmit={handleItemSubmit}>
          <Box>
            <Table responsive={false}>
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Code
                  </th>
                  <th>
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <td>
                    <Box>
                      <TextInput name='name' defaultValue={ inventoryItem.name } />
                    </Box>
                  </td>
                  <td>
                    <Box>
                      <TextInput name='code' defaultValue={ inventoryItem.code } />
                    </Box>
                  </td>
                  <td>
                    <ControlledSelect name='category'
                      placeHolder='Category'
                      options={itemCategory}
                    />
                  </td>
                </TableRow>
              </tbody>
            </Table>
            <Table responsive={false}>
              <thead>
                <tr>
                  <th>
                    Supplier
                  </th>
                  <th>
                    Unit
                  </th>
                  <th>
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <td>
                    <ControlledSelect name='supplier'
                      placeHolder='Supplier'
                      options={itemSupplier}
                    />
                  </td>
                  <td>
                    <Box>
                      <TextInput name='unit' defaultValue={ inventoryItem.unit } />
                    </Box>
                  </td>
                  <td>
                  <Box>
                    <TextInput name='cost' defaultValue={ inventoryItem.cost } />
                  </Box>
                  </td>
                </TableRow>
              </tbody>
            </Table>
            <Table responsive={false}>
              <thead>
                <tr>
                  <th>
                    <Box>
                    </Box>
                  </th>
                  <th>
                    Quantity
                  </th>
                  <th>
                    Par Level
                  </th>
                  <th>
                    <Box>
                    </Box>
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <td>
                    <Box>
                    </Box>
                  </td>
                  <td>
                    <NumberInput
                      name='quantity'
                      defaultValue={ inventoryItem.quantity }
                      step={1}
                      min={0}
                    />
                  </td>
                  <td>
                    <NumberInput
                      name='parLevel'
                      defaultValue={ inventoryItem.parLevel }
                      step={1}
                      min={0}
                    />
                  </td>
                  <td>
                    <Box>
                    </Box>
                  </td>
                </TableRow>
              </tbody>
            </Table>
            <hr />
            <Box className='ItemEditButtons' direction='row' align='stretch'>
              <Button type='submit' className='modalButton1' primary='true' label='Submit' fill='true'/>
              <Button path='/inventory/' className='modelButton2' accent='true' label='Cancel' fill='true'/>
            </Box>
            <Button id='deleteButton' hoverIndicator='accent' onClick={() => handleDelete(inventoryItem._id) } critical='true' label='Delete Item' fill='true'/>
          </Box>
        </form>
      </App>
    )
  }
}

export default withRouter(ItemEdit);
