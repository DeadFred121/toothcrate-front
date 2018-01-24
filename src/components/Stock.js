// React Components
import React, { Component } from 'react';

// Grommet Components
import Select from 'grommet/components/Select';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

// Internal Components
import StockTableRow from '../components/StockTableRow';

class Stock extends Component { 

  state = {
    filterValue: null
  }

  handleFilterChange = ({ value }) => this.setState({ filterValue: value })
  getFilteredItems = () => this.props.inventory.filter((item) => item.supplier === this.state.filterValue)

  render () {

    const { inventory, updateItemStock } = this.props

    // Mapping through the Inventory by Supplier and setting as an Array
    const itemSupplier = Array.from(new Set(inventory.map(item => (item.supplier))))

    return (
      <App className="ItemEdit">
        <Headline>Stock Update</Headline>
        <Select
          id='StockSearchBar'
          placeHolder='Select Supplier'
          options={itemSupplier}
          onChange={this.handleFilterChange}
          value={this.state.filterValue}
        />
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Save?']} sortIndex={0} sortAscending={true}/>
            <tbody>
              {
                this.getFilteredItems().map(item => (
                  <StockTableRow item={item} updateItemStock={updateItemStock}/>
                  )
                )
              }
            </tbody>
        </Table>
        <hr />
        <Box className='StockButtons' direction='row' align='center'>
          <Button  path='/' className='modalButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
      </App>
    )
  }
}

export default Stock;
