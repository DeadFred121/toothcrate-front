// React Components
import React from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';
import NumberInput from 'grommet/components/NumberInput';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

const Stock = ({ inventory }) => {

  return (
          <App className="ItemEdit">
    <Headline>Stock Update</Headline>
    <SearchInput
      id='StockSearchBar'
      placeHolder='Search Supplier'
      suggestions={
        inventory.map(item => (item.supplier) )
      }
    />
    <Table>
      <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity']} sortIndex={0} sortAscending={true}/>
        <tbody>
          {
            inventory.map(item => (
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
                <NumberInput defaultValue={0}
                             min={0}
                             step={1} />
              </td>
            </TableRow>))
          }
        </tbody>
    </Table>
    <hr />
    <Box className='StockButtons' direction='row' align='center'>
      <Button path='/order' className='modalButton1' primary='true' label='Update Stock' fill='true'/>
      <Button  path='/' className='modalButton2' accent='true' label='Cancel' fill='true'/>
    </Box>
  </App>
    )
  }

export default Stock;
