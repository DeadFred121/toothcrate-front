// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import Status from 'grommet/components/Status';

// Internal Components
import EntryShow from './components/EntryShow';
import OptionControls from './components/OptionControls';


class Order extends Component {

  state = {
    suppliers: ['HSH', 'Horsley', 'Crown', 'Dentists R Us']
  }

  render() {
    return (
      <App>
        <SearchInput
          placeHolder='Enter Supplier'
          suggestions={this.state.suppliers}
          size="med"
        />

        <Headline>Supplier</Headline>
        <hr />
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
        <OptionControls />

      </App>
    )
  }
}