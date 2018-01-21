
// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import NumberInput from 'grommet/components/NumberInput';

// Internal Components
import EntryShow from './components/EntryShow';
import OptionControls from './components/OptionControls';


class Stock extends Component {

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
