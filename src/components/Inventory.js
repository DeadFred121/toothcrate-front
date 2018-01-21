// React Components
import React, {Component} from 'react';

// Grommet Components
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Timestamp from 'grommet/components/Timestamp';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import Headline from 'grommet/components/Headline';

// Internal Components
// import InvModal from './InvModal'

// API
import {api} from '../api/init';

class Inventory extends Component {

  state = {
    inventory: [],
    selectItem: null,
    InventoryItem: [],
    edit: false
  }

  render() {

    const { inventory, selectItem } = this.state

    return (<App>
      {
        this.state.selectItem &&
        // <InvModal />
        <Layer closer={true} onClose={() => {
              this.setState({selectItem: null}) }}>
          <Heading className='modalHeading' tag='h2' truncate={true}>
            {this.state.InventoryItem.name}
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
                  {this.state.InventoryItem.name}
                </td>
                <td>
                  {this.state.InventoryItem.code}
                </td>
                <td>
                  {this.state.InventoryItem.category}
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
                  {this.state.InventoryItem.supplier}
                </td>
                <td>
                  {this.state.InventoryItem.unit}
                </td>
                <td>
                  {this.state.InventoryItem.price}
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
                  {this.state.InventoryItem.quantity}
                </td>
                <td>
                  {this.state.InventoryItem.parLevel}
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
                  <Timestamp value={this.state.InventoryItem.updatedAt}/>
                </td>
                <td>
                  {this.state.InventoryItem.signature}
                </td>
              </TableRow>
            </tbody>
          </Table>
          <Box direction='row' align='stretch'>
            <Button className='modalButton1' primary='true' label='Order' fill='true'/>
            <Button className='modalButton2' accent='true' label='Cancel' fill='true'/>
          </Box>
          <Button className='modalEditButton' secondary='true' icon={<EditIcon />} label='Edit Inventory Item' fill='true'/>
        </Layer>
      }
      <Headline align="center" size="med">Inventory</Headline>
      <Table responsive={false} >
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
        <tbody>
          {
            this.state.inventory.map(item => (<TableRow>
              <td>
                <Anchor onClick={() => {
                    this.setState({selectItem: item._id, InventoryItem: item})
                  }}>
                  {item.code}
                </Anchor>
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.category}
              </td>
              <td>
                {item.quantity}
              </td>
              <td>
                <Status value='ok'/>
              </td>
            </TableRow>))
          }
        </tbody>
      </Table>
    </App>)
  }

  // Rendering API Inventory request.
  componentDidMount = () => {
    api.get('/api/inventory').then(res => {
      const inventory = res.data
      this.setState({inventory})
    })
  }
}

export default Inventory;
