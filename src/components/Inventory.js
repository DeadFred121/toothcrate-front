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
import Animate from 'grommet/components/Animate';
import Timestamp from 'grommet/components/Timestamp';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';

// API
import {api} from '../api/init';

class Inventory extends Component {

  state = {
    inventory: [],
    selectItem: null,
    inventoryItem: [],
    edit: false
  }

  render() {

    return (<App>
      {
        this.state.selectItem && <Layer closer={true} onClose={() => {
              this.setState({selectItem: null})
            }}>
              <Heading className='modelHeading' tag='h2' truncate={true}>
                  {this.state.inventoryItem.name}
              </Heading>
              <Table responsive={true} scrollable={true}>
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
                      {this.state.inventoryItem.name}
                    </td>
                    <td>
                      {this.state.inventoryItem.code}
                    </td>
                    <td>
                      {this.state.inventoryItem.category}
                    </td>
                  </TableRow>
                </tbody>
                </Table>
                    <Table>
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
                            {this.state.inventoryItem.supplier}
                          </td>
                          <td>
                            {this.state.inventoryItem.unit}
                          </td>
                          <td>
                            {this.state.inventoryItem.price}
                          </td>
                        </TableRow>
                      </tbody>
                      </Table>
                      <Table>
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
                              {this.state.inventoryItem.quantity}
                            </td>
                            <td>
                              {this.state.inventoryItem.parLevel}
                            </td>
                          </TableRow>
                        </tbody>
                        </Table>
                      <Table>
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
                              <Timestamp value={this.state.inventoryItem.updatedAt} />
                            </td>
                            <td>
                              {this.state.inventoryItem.signature}
                            </td>
                          </TableRow>
                        </tbody>
                        </Table>
                        <Box direction='row' align='stretch'>
                          <Button className='modelBox1' primary='true' label='Order' fill='true' />
                          <Button className='modelBox2' accent='true' label='Cancel' fill='true' />
                        </Box>
                          <Button className='modelEditButton' secondary='true' icon={<EditIcon />} label='Edit Inventory Item' fill='true'/>
          </Layer>
      }

      <Table>
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
        <tbody>
          {
            this.state.inventory.map(item => (<TableRow>
              <td>
                <Anchor onClick={() => {
                    this.setState({selectItem: item._id, inventoryItem: item})
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
                <Status value='critical'/>
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
