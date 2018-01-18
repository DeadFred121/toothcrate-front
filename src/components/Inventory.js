import React, {Component} from 'react';
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';

class Inventory extends Component {
  render() {
    return (<App>
      <Table>
        <TableHeader labels={['Name', 'Note']} sortIndex={0} sortAscending={true}/>
        <tbody>
          <TableRow>
            <td>
              Alan
            </td>
            <td>
              plays accordion
            </td>
          </TableRow>
          <TableRow>
            <td>
              Chris
            </td>
            <td>
              drops the mic
            </td>
          </TableRow>
          <TableRow>
            <td>
              Tracy
            </td>
            <td>
              travels the world
            </td>
          </TableRow>
        </tbody>
      </Table>
    </App>)
  }
}

export default Inventory;
