
// React Components
import React, {Component} from 'react';

// Grommet Components
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';


class Inventory extends Component {
  render() {
    return (<App>
      <Table>
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
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
    </App>)
  }
}

export default Inventory;
