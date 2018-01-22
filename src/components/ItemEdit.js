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
import EditIcon from 'grommet/components/icons/base/Edit';

// Internal Components
import OptionControls from './OptionControls';

class ItemEdit extends Component {

  state = {
    inventoryItem: []
  }

  render() {
    // return (<App>
    //   <Headline>New Inventory Item</Headline>
    //   <TextInput defaultValue="Item Name"/>
    //   <Table>
    //     <TableHeader labels={[
    //         'Item Code',
    //         'Name',
    //         'Category',
    //         'Cost',
    //         'Supplier',
    //         'Quantity',
    //         'Unit',
    //         'Par Level'
    //       ]} sortIndex={0} sortAscending={true}/>
    //     <tbody>
    //       <TableRow>
    //         <td>
    //           <TextInput defaultValue="Item Code"/>
    //         </td>
    //         <td>
    //           <TextInput defaultValue="Item Name"/>
    //         </td>
    //         <td>
    //           <TextInput defaultValue="Category"/>
    //         </td>
    //         <td>
    //           <TextInput defaultValue="Cost"/>
    //         </td>
    //         <td>
    //           <TextInput defaultValue="Supplier"/>
    //         </td>
    //         <td>
    //           <NumberInput step={1}/>
    //         </td>
    //         <td>
    //           <TextInput default="Unit"/>
    //         </td>
    //         <td>
    //           <NumberInput step={1}/>
    //         </td>
    //       </TableRow>
    //     </tbody>
    //   </Table>
    //   <OptionControls/>
    // </App>)

    return (<App className="ItemEdit">

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
                <TextInput placeHolder="Category" />
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
                <TextInput placeHolder="Supplier" />
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
