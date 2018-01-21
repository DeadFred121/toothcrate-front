// React Components
import React, { Component } from 'react';

// Grommet Components
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';
import Headline from 'grommet/components/Headline';

// Internal Components
import OptionControls from './OptionControls';

// API
import {api} from '../api/init';

class ProcShow extends Component {
  render() {
    return (
      <App>
        <Headline align="center" size="med">Procedure Title</Headline>
        <Table>
          <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Status']} sortIndex={0} sortAscending={true} />
          <tbody>
            <TableRow>
              <td>
                XL-421
              </td>
              <td>
                Toothbrush
              </td>
              <td>
                Essentials
              </td>
              <td>
                2
              </td>
              <td>
                <Status value='critical' />
              </td>
            </TableRow>
            <TableRow>
              <td>
                XL-422
              </td>
              <td>
                Toothbrush 2
              </td>
              <td>
                Essentials
              </td>
              <td>
                188
              </td>
              <td>
                <Status value='ok' />
              </td>
            </TableRow>
            <TableRow>
              <td>
                XL-423
              </td>
              <td>
                Toothbrush 3
              </td>
              <td>
                Essentials
              </td>
              <td>
                300
              </td>
              <td>
                <Status value='warning' />
              </td>
            </TableRow>
          </tbody>
        </Table>
        <OptionControls />
      </App>
    )
  }

  componentDidMount = () => {
    api.get('/api/procedure').then(res => {
      const procedures = res.data.map(procedure => {
        return procedure.name
      })
      this.setState({
        procedures
      })
    })
  }

}

export default ProcShow;
