
// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import NumberInput from 'grommet/components/NumberInput';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';

// Internal Components
import OptionControls from './OptionControls';

class Stock extends Component {

state = {
  suppliers: ['HSH', 'Horsley', 'Crown', 'Dentists R Us']
}

  render() {
    return (
      <App>
        <Headline>Stock Update</Headline>
        <SearchInput
          id='StockSearchBar'
          placeHolder='Search Supplier'
          suggestions={this.state.suppliers}
        />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity']} sortIndex={0} sortAscending={true}/>
            <tbody>
              {
                this.state.suppliers.map(item => (<TableRow>
                  <td>
                    {item.code}
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.category}
                  </td>
                  <td>
                    <NumberInput defaultValue={1}
                                 min={0}
                                 step={1} />
                  </td>
                </TableRow>))
              }
            </tbody>
        </Table>
        <hr />
        <Box className='StockButtons' direction='row' align='center'>
          <Button path='/order' className='modalButton1' primary='true' label='Update Stock' fill='true'/>
          <Button  path='/' className='modalButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
        {/* <Button path='/itemedit' className='modalEditButton' secondary='true' icon={<EditIcon />} label='Edit Inventory Item' fill='true'/> */}
        {/* <OptionControls /> */}
      </App>
    )
  }
}

export default Stock;
