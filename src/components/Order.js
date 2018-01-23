// React Components
import React from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import Status from 'grommet/components/icons/Status';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';

const Order = ({ inventory }) => {

  return (
    <App>
      <Headline>Orders</Headline>
      <SearchInput
        id='StockSearchBar'
        placeHolder='Search Suppliers'
        suggestions={
          inventory.map(item => (item.supplier) )
        }
      />
      <Table>
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
          <tbody>
            {
              inventory.map(item => (<TableRow>
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

export default Order;
