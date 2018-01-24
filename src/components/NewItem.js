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

// Internal Components
import ControlledSelect from '../components/ControlledSelect';
// API/Axios
import { api } from '../api/init';

class NewItem extends Component {

  render () {

    const { inventory, inventoryItem, selectItem, hideModal, updateNewInventory, currentValue, selectInput, handleNewItemSubmit } = this.props
    // Mapping through the Inventory by Supplier and setting as an Array
    const itemSupplier = Array.from(new Set(inventory.map(item => (item.supplier))))
    // Mapping through the Inventory by Category and setting as an Array
    const itemCategory = Array.from(new Set(inventory.map(item => (item.category))))

    return (
      <App className="ItemEdit">
        <Headline>
          New Inventory Item
        </Headline>
        <form onSubmit={handleNewItemSubmit} >
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
                    <TextInput name='name' placeHolder="Item Name" />
                  </td>
                  <td>
                    <TextInput fill={true} name='code' placeHolder="Item Code" />
                  </td>
                  <td>
                    <ControlledSelect
                      name='category'
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
                    <ControlledSelect
                      name='supplier'
                      placeHolder='Supplier'
                      options={itemSupplier}
                    />
                  </td>
                  <td>
                    <TextInput name='unit' placeHolder="Unit" />
                  </td>
                  <td>
                    <TextInput name='cost' placeHolder="Cost" />
                  </td>
                </TableRow>
              </tbody>
            </Table>
            <Table responsive={false}>
              <thead>
                <tr>
                  <th>
                    Quantity
                  </th>
                  <th>
                    Par Level
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <td>
                    <NumberInput 
                      name='quantity'
                      defaultValue={1}
                      step={1}
                      min={0}
                    />
                  </td>
                  <td>
                    <NumberInput 
                      name='parLevel'
                      defaultValue={1}
                      step={1}
                      min={0}
                    />
                  </td>
                </TableRow>
              </tbody>
            </Table>
            <hr />
            <Box className='ItemEditButtons' direction='row' align='stretch'>
              <Button type='submit' className='modalButton1' primary='true' label='Submit' fill='true' />
              <Button path='/' className='modelButton2' accent='true' label='Cancel' fill='true'/>
            </Box>
          </Box>
        </form>
      </App>
    )
  }
}


export default NewItem;
