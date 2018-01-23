import React from 'react'

import App from 'grommet/components/App'
import Table from 'grommet/components/Table'
import TableHeader from 'grommet/components/TableHeader'
import TableRow from 'grommet/components/TableRow'
import Select from 'grommet/components/Select'
import NumberInput from 'grommet/components/NumberInput'
import FormCloseIcon from 'grommet/components/icons/base/FormClose'
import Button from 'grommet/components/Button'

const NewProcAddItem = ({ inventory }) => {
  return (
    <App>
    <Table>
      <TableHeader labels={['Item Name', 'Quantity', 'Delete Item']} />
      <tbody>
        <TableRow>
          <td>
            <Select placeHolder='Item Name'
                    multiple={false}
                    onSearch={true}
                    options={
                      inventory.map(item => (item.name) )
                    }
                    // value={undefined}
                    // onChange={...}
            />
          </td>
          <td>
            <NumberInput className='NewProcNumInput'
                         defaultValue={1}
                         step={1}
                         min={0}
                       />
          </td>
          <td>
            <Button className='NewProcDeleteItemButton' icon={<FormCloseIcon colorIndex='light-1' />} accent="true"/>
          </td>
        </TableRow>
      </tbody>
    </Table>
  </App>
)
}

export default NewProcAddItem;
