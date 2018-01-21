// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import Status from 'grommet/components/icons/Status';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';

// Internal Components

class Order extends Component {

  state = {
    suppliers: ['HSH', 'Horsley', 'Crown', 'Dentists R Us']
  }

  render() {
    return (
      <App>
        <Headline>Orders</Headline>
        <SearchInput
          placeHolder='Search Suppliers'
          suggestions={this.state.suppliers}
        />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
            <tbody>
              {
                this.state.suppliers.map(item => (<TableRow>
                  <td>
                    {item.code}
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
                </TableRow>))
              }
            </tbody>
        </Table>
        <hr />

      </App>
    )
  }
}

export default Order;
