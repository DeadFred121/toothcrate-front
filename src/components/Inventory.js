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
import InvModal from './InvModal'

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

    const { inventory, selectItem, inventoryItem } = this.state

    return (<App>
      <Headline align="center" size="med">Inventory</Headline>
      <Table responsive={false} >
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
                <Status value='ok'/>
              </td>
            </TableRow>))
          }
        </tbody>
      </Table>

      {
        this.state.selectItem &&
        <InvModal inventoryItem={inventoryItem} selectItem={selectItem} />
      }
    </App>)
  }
}

export default Inventory;
