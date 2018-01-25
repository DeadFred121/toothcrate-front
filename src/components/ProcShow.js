// React Components
import React, { Component } from 'react';

// Grommet Components
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

// Routing Components
import {
  Redirect
} from 'react-router-dom';

class ProcShow extends Component {

state = {
}

  render () {

  const { cancelRedirect, procedures, procSelectId } = this.props

  cancelRedirect()

  const procedure = procedures.find(proc => proc._id === procSelectId)
  if (!procedure) return ( <Redirect to='/' /> )

    return (
      <App>
        <Headline>{ procedure.name }</Headline>
        <Table responsive={false} >
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
          <tbody>
            {
              procedure.items.map(individualItem => (
                <TableRow>
                <td>
                  {individualItem.item.code}
                </td>
                <td>
                  {individualItem.item.name}
                </td>
                <td>
                  {individualItem.item.category}
                </td>
                <td>
                  {individualItem.useQuantity}
                </td>
                <td>
                 <Status value={individualItem.item.quantity > individualItem.item.parLevel ? 'ok' : 'warning'}/>

                {/* //
                //     {(e) => { */
                //     if (e.item.parLevel <= (5 / 100) * e.item.quantity) {
                //       'critical';
                //     } else if (e.item.parLevel <= (15 / 100) * e.item.quantity) {
                //       'warning';
                //     } else {
                //     'ok';
                //     }
                //   }
                // }
                }
                </td>
              </TableRow>))
            }
          </tbody>
        </Table>
        <Box className='ItemEditButtons' direction='row' align='stretch'>
          <Button type='submit' className='modalButton1' primary={true} label='Submit' fill={true} />
          <Button path='/' className='modelButton2' accent={true} label='Cancel' fill={true}/>
        </Box>
      </App>
    )
  }
}

export default ProcShow;
