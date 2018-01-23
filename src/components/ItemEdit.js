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

// Routing Components
import {
  Redirect
} from 'react-router-dom';

// API
import {api} from '../api/init';

class ItemEdit extends Component {

  render() {

  const { inventory, inventoryItem, selectItem, hideModal, displayModal, updateExistingInventory, handleDelete } = this.props

  return (
      <App className="ItemEdit">
        <Headline>
          Edit Inventory Item
        </Headline>
        <Box onSubmit={(event) => {
          event.preventDefault()
          const form = event.target
          const elements = form.elements
          console.log(elements)
          const name = elements.name.value
          const code = elements.code.value
          const category = elements.category.value
          const supplier = elements.supplier.value
          const unit = elements.unit.value
          const cost = elements.cost.value
          const quantity = elements.quantity.value
          const parLevel = elements.parLevel.value

          api.put(`/api/inventory/${inventoryItem._id}`, {
            name,
            code,
            category,
            supplier,
            unit,
            cost,
            quantity,
            parLevel
          }).then(res => {
            updateExistingInventory(res.data)
          })

          }} >
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
                <TextInput name='name' defaultValue={ inventoryItem.name } />
              </td>
              <td>
                <TextInput name='code' defaultValue={ inventoryItem.code } />
              </td>
              <td>
                <TextInput name='category' defaultValue={ inventoryItem.category } />
                {/* <Select defaultValue={ inventoryItem.category }
                        inline={false}
                        multiple={false}
                        onSearch={true}
                        options={ inventory.category }
                        // value={undefined}
                        // onChange={...}
                      /> */}
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
                <TextInput name='supplier' defaultValue={ inventoryItem.supplier } />
                {/* <Select defaultValue={ inventoryItem.supplier }
                        inline={false}
                        multiple={false}
                        onSearch={true}
                        options={ inventory.supplier }
                        // value={undefined}
                        // onChange={...}
                      /> */}
              </td>
              <td>
                <TextInput name='unit' defaultValue={ inventoryItem.unit } />
              </td>
              <td>
                <TextInput name='cost' defaultValue={ inventoryItem.cost } />
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
                <NumberInput name='quantity'
                             defaultValue={ inventoryItem.quantity }
                             step={1}
                             min={0}
                />
              </td>
              <td>
                <NumberInput name='parLevel'
                             defaultValue={ inventoryItem.parLevel }
                             step={1}
                             min={0}
                />
              </td>
            </TableRow>
          </tbody>
        </Table>
        <hr />
        <Box className='ItemEditButtons' direction='row' align='stretch'>
          <Button type='submit' className='modalButton1' primary='true' label='Submit' fill='true'/>
          <Button path='/inventory/' className='modelButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
        <Button id='deleteButton' hoverIndicator='accent' onClick={() => handleDelete(inventoryItem._id) } critical='true' label='Delete' fill='true'/>
      </Box>
    </Box>
  </App>)
}}

export default ItemEdit;
