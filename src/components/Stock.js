
// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import NumberInput from 'grommet/components/NumberInput';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';

// Internal Components
import OptionControls from './OptionControls';

class Stock extends Component {

state = {
  suppliers: ['HSH', 'Horsley', 'Crown', 'Dentists R Us']
}

  render() {
    return (
      <App>
        <Headline>Stock Update</Headline>
        <SearchInput
          placeHolder='Search Supplier'
          suggestions={this.state.suppliers}
        />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity']} sortIndex={0} sortAscending={true}/>
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
                    <NumberInput defaultValue={item.quantity} />
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

export default Stock;
