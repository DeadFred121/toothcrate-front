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
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

// Routing Components
import {
  Redirect
} from 'react-router-dom';

class ProcShow extends Component {

  state={
    dentist: null,
    location: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render () {

  const { cancelRedirect, procedures, procSelectId, inventory, handleSubmitProcedureHistory } = this.props

  cancelRedirect()

  const procedure = procedures.find(proc => proc._id === procSelectId)
  if (!procedure) return ( <Redirect to='/' /> )

    return (
      <App>
        <Headline>{ procedure.name }</Headline>
        <Table responsive={false} >
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} />
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
                </td>
              </TableRow>))
            }
          </tbody>
        </Table>
        <Table responsive={false} >
          <thead>
            <tr>
              <th>
                Dentist Name
              </th>
              <th>
                Sergery Location
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>
                <Box>
                <TextInput
                  name='dentist'
                  value={ this.state.dentist }
                  placeHolder='Dentist Name'
                  onDOMChange={ this.handleChange }
                  />
                </Box>
              </td>
              <td>
                <Box>
                  <TextInput
                    name='location'
                    value={ this.state.location }
                    placeHolder='Location for Procedure'
                    onDOMChange={ this.handleChange }
                  />
                </Box>
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Box className='ItemEditButtons' direction='row' align='stretch'>
          <Button onClick={() => handleSubmitProcedureHistory(procedure, this.state.dentist, this.state.location) } type='submit' className='modalButton1' primary='true' label='Submit' fill='true' />
          <Button path='/' className='modelButton2' accent='true' label='Cancel' fill='true'/>
        </Box>
      </App>
    )
  }
}

export default ProcShow;
