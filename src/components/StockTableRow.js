
// React Components
import React, { Component } from 'react';

// Grommet Components
import TableRow from 'grommet/components/TableRow';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';


class StockTableRow extends Component {
  
  state = {
    quantity: 0
  }
  
  render () {
    const { item, updateItemStock } = this.props

    return (
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
          <NumberInput defaultValue={item.quantity}
            min={0}
            step={1}
            onChange={(event) => {
              this.setState({quantity: event.target.value})
            }}
          />
        </td>
        <td>
          <Button
            type='submit'
            className='modalButton1'
            primary='true'
            label='Save'
            fill='true'
            onClick={() => {
              updateItemStock(item, this.state.quantity)
            }}
          />
        </td>                      
      </TableRow>
    )
  }
}

export default StockTableRow;