// React Components
import React, { Component } from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import NumberInput from 'grommet/components/NumberInput';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';

// Internal Components
import OptionControls from './OptionControls';

class ItemEdit extends Component {
  render() {
    return (
      <App>
        <TextInput defaultValue="Item Name" />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Cost', 'Supplier', 'Quantity', 'Unit', 'Par Level']} sortIndex={0} sortAscending={true} />
          <tbody>
            <TableRow>
              <td>
                <TextInput defaultValue="Item Code" />
              </td>
              <td>
                <TextInput defaultValue="Item Name" />
              </td>
              <td>
                <TextInput defaultValue="Category" />
              </td>
              <td>
                <TextInput defaultValue="Cost" />
              </td>
              <td>
                <TextInput defaultValue="Supplier" />
              </td>
              <td>
                <NumberInput step={1} />
              </td>
              <td>
                <TextInput default="Unit" />
              </td>
              <td>
                <NumberInput step={1} />
              </td>
            </TableRow>
          </tbody>
        </Table>
        <OptionControls />
      </App>
    )
  }
}

export default ItemEdit;
