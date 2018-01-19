
// React Components
import React, {Component} from 'react';

// Grommet Components
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';
import Anchor from 'grommet/components/Anchor';

// API
import { api } from '../api/init';


class Inventory extends Component {

  state = {
    inventory: [],
    selectItem: null
  }


  render() {
    return (
      <App>
      {this.state.selectItem && <p>I'm a modal</p>}
      <Table>
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
        <tbody>
        {this.state.inventory.map(item => (
          <TableRow>
            <td>
            <Anchor onClick={() => {
              this.setState({selectItem: item._id})
            }} >
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
              <Status value='critical' />
            </td>
          </TableRow>
        ))}
        </tbody>
      </Table>
    </App>)
  }

  // Rendering API Inventory request.
  componentDidMount = () => {
    api.get('/api/inventory').then(res => {
      const inventory = res.data
      this.setState({
        inventory
      })
    })
  }


}

export default Inventory;
