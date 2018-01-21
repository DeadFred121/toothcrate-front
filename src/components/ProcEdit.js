// React Components
import React, {Component} from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import NumberInput from 'grommet/components/NumberInput';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Headline from 'grommet/components/Headline';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';

// Internal Components
import OptionControls from './OptionControls';

class ProcEdit extends Component {
  render() {
    return (<App>
      <Headline>Add New Procedure</Headline>
      <TextInput defaultValue="Procedure Name"/>
      <Table>
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', '']} sortIndex={0} sortAscending={true}/>
        <tbody>
          <TableRow>
            <td>
              <TextInput defaultValue={'Item Code'}/>
            </td>
            <td>
              <TextInput defaultValue={'Item Name'}/>
            </td>
            <td>
              <TextInput defaultValue={'Category'}/>
            </td>
            <td>
              <NumberInput size='small' step={1}/>
            </td>
            <td>
              <Button icon={<FormCloseIcon colorIndex='light-1' />} accent="true"/>
            </td>
          </TableRow>
        </tbody>
      </Table>
      <Button accent="true" label="New +"/>
      <OptionControls/>
    </App>)
  }
}

export default ProcEdit;
