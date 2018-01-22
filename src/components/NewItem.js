// React Components
import React, {Component} from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';
import Form from 'grommet/components/Form';

// API/Axios
import { api, setJwt } from '../api/init';

const ItemEdit = ({ inventory, inventoryItem, selectItem, hideModal }) => {

  return (
      <App className="ItemEdit">
        <Headline>
          New Inventory Item
        </Headline>
        <Box onSubmit={(event) => {
          event.preventDefault()
          const form = event.target
          const elements = form.elements
          const name = elements.name.value
          const code = elements.code.value
          const category = elements.category.value
          const supplier = elements.supplier.value
          const unit = elements.unit.value
          const cost = elements.cost.value
          const quantity = elements.quantity.value
          const parLevel = elements.parLevel.value

            api.post('/api/inventory', {
              name,
              code,
              category,
              supplier,
              unit,
              cost,
              quantity,
              parLevel
            }).then(res => {
              console.log(res)
              this.props.updateInventory(res)
            })
          }} >
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
                <Select name='category'
                        placeHolder='Category'
                        inline={false}
                        multiple={false}
                        onSearch={true}
                        options={
                            inventory.map(item => (item.category) )
                          }
                        // value={undefined}
                        // onChange={...}
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
                <Select name='supplier'
                        placeHolder='Supplier'
                        inline={false}
                        multiple={false}
                        onSearch={true}
                        options={
                            inventory.map(item => (item.supplier) )
                          }
                        // value={undefined}
                        // onChange={...}
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
                <NumberInput name='quantity'
                             value={1}
                             step={1}
                             min={0}
                />
              </td>
              <td>
                <NumberInput name='parLevel'
                             value={1}
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
          <Button path='/inventory' className='modelButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
      </Box>
    </App>)
}

export default ItemEdit;
