// React Components
import React, { Component } from 'react';

// Grommet Components
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Timestamp from 'grommet/components/Timestamp';
import EditIcon from 'grommet/components/icons/base/Edit';

class InvModal extends Component {

  // Hide modal on unmount
  componentWillUnmount() {
    this.props.hideModal()
  }

  render() {
  
    const { inventoryItem, hideModal } = this.props

    return (
      <Layer closer={true} onClose={ hideModal }>
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
                Cost
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
                ${inventoryItem.cost}
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
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
                <Timestamp align='center' value={inventoryItem.updatedAt}/>
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Box direction='row' align='stretch'>
          <Button path='/order' className='modalButton1' primary={true} label='Order' fill={true}/>
          <Button onClick={ hideModal } className='modalButton2' accent={true} label='Cancel' fill={true}/>
        </Box>
        <Button path='/itemedit' className='modalEditButton' secondary={true} icon={<EditIcon />} label='Edit Inventory Item' fill={true}/>
      </Layer>
    )
  }
}

export default InvModal;
