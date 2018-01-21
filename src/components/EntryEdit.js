import React, { Component } from 'react';
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import OptionControls from './components/OptionControls';
import Button from 'grommet/components/Button';
import Table from 'grommet/components/Table';
import NumberInput from 'grommet/components/NumberInput';
import OptionControls from './components/OptionControls';

class EntryEdit extends Component {
  render() {
    return (
      <App>
        <TextInput defaultValue="Entry Name" />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity']} sortIndex={0} sortAscending={true} />
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
                <NumberInput step={1} />
            </td>
              <td>
                <Button icon="" critical="true" />
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Button accent="true" label="New +" />
        <OptionControls />
      </App>
    )
  }
}

export default EntryShow;
