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

handleNewItemSubmit = (event) => {
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
    this.props.updateNewInventory(res.data);
    this.props.history.push('/inventory');
  })
}
 

render () {

const { inventory, inventoryItem, selectItem, hideModal, updateNewInventory, currentValue, selectInput } = this.props
// Mapping through the Inventory by Supplier and setting as an Array
const itemSupplier = Array.from(new Set(inventory.map(item => (item.supplier))))
// Mapping through the Inventory by Category and setting as an Array
const itemCategory = Array.from(new Set(inventory.map(item => (item.category))))

  return (
      <App className="ItemEdit">
        <Headline>
          New Inventory Item
        </Headline>
        <form onSubmit={this.handleNewItemSubmit} >
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
                              defaultValue={1}
                              step={1}
                              min={0}
                  />
                </td>
                <td>
                  <NumberInput name='parLevel'
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


// class ControlledSelect extends Component {
//   state = {
//     value: null
//   }

//   constructor(props) {
//     super(props);

//     this.setState({
//       value: props.defaultValue || null
//     });
//   }

//   changeHandler = ({ value }) => this.setState({ value });

//   render() {
//     const { options, defaultValue, name, placeHolder } = this.props;
//     const { value } = this.state;

//     return (
//       <Select name={name}
//         placeHolder={placeHolder}
//         inline={false}
//         multiple={false}
//         onSearch={true}
//         options={options}
//         onChange={this.changeHandler}
//         value={value}
//       />
//     );
//   }
// }
