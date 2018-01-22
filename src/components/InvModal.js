// React Components
import React from 'react';

// Grommet Components
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Timestamp from 'grommet/components/Timestamp';
import EditIcon from 'grommet/components/icons/base/Edit';

// Internal Components

const InvModal = ({ inventoryItem, selectItem }) => {

  return (
    <App className="InvModal">
      <Layer closer={true} onClose={() => {
            this.setState({selectItem: null}) }}>
        <Heading className='modalHeading' tag='h2' truncate={true}>
          {inventoryItem.name}
        </Heading>
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
                {inventoryItem.name}
              </td>
              <td>
                {inventoryItem.code}
              </td>
              <td>
                {inventoryItem.category}
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
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
                {inventoryItem.supplier}
              </td>
              <td>
                {inventoryItem.unit}
              </td>
              <td>
                {inventoryItem.price}
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
                {inventoryItem.quantity}
              </td>
              <td>
                {inventoryItem.parLevel}
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Table responsive={false}>
          <thead>
            <tr>
              <th>
                Last Updated
              </th>
              <th>
                By
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
                <Timestamp value={inventoryItem.updatedAt}/>
              </td>
              <td>
                {inventoryItem.signature}
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Box direction='row' align='stretch'>
          <Button path='/order' className='modalButton1' primary='true' label='Order' fill='true'/>
          <Button className='modalButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
        <Button path='/itemedit' className='modalEditButton' secondary='true' icon={<EditIcon />} label='Edit Inventory Item' fill='true'/>
      </Layer>
    </App>)
  }

export default InvModal;
