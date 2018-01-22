// React Components
import React, {Component} from 'react';

// Grommet Components
import App from 'grommet/components/App';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Headline from 'grommet/components/Headline';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Timestamp from 'grommet/components/Timestamp';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';
import EditIcon from 'grommet/components/icons/base/Edit';

// Internal Components
import OptionControls from './OptionControls';

class ItemEdit extends Component {

  render() {
    return (
      <App className="ItemEdit">
        <Headline>
          New Inventory Item
        </Headline>
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
                <TextInput placeHolder="Item Name" />
              </td>
              <td>
                <TextInput placeHolder="Item Code" />
              </td>
              <td>
                <Select placeHolder='Category'
                        inline={false}
                        multiple={false}
                        onSearch={true}
                        options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
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
                <Select placeHolder='Supplier'
                        inline={false}
                        multiple={false}
                        onSearch={true}
                        options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                        // value={undefined}
                        // onChange={...}
                      />
              </td>
              <td>
                <TextInput placeHolder="Unit" />
              </td>
              <td>
                <TextInput placeHolder="Cost" />
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
                <NumberInput value={1}
                             step={1}
                             min={0}
                />
              </td>
              <td>
                <TextInput placeHolder="Par Level" />
              </td>
            </TableRow>
          </tbody>
        </Table>
        <hr />
        <Box className='ItemEditButtons' direction='row' align='stretch'>
          <Button className='modalButton1' primary='true' label='Submit' fill='true'/>
          <Button className='modelButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
    </App>)
  }
}

export default ItemEdit;
