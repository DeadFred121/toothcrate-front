// React Components
import React, { Component } from 'react';

// Grommet Components
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import Status from 'grommet/components/icons/Status';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';


class Order extends Component {

  state = {
    filterValue: null
  }

  handleFilterChange = ({ value }) => this.setState({ filterValue: value })
  getFilteredItems = () => this.props.inventory.filter((item) => item.supplier === this.state.filterValue && item.quantity <= item.parLevel)


  render () {
  const {inventory, updateSupplierSearchId } = this.props

  // Mapping through the Inventory by Supplier and setting as an Array
  const itemSupplier = Array.from(new Set(inventory.map(item => (item.supplier))))

    return (
      <App>
        <Headline>Orders</Headline>
        <Select 
          name='supplier'
          placeHolder='Supplier'
          options={itemSupplier}
          onChange={this.handleFilterChange}
          value={this.state.filterValue}
        />
        <hr />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true} />
            <tbody>
              {
                this.getFilteredItems().map(item => (
                  <TableRow>
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
                  </TableRow>)
                )
              }
            </tbody>
        </Table>
        <hr />
      </App>
    )
  }
}

export default Order;
