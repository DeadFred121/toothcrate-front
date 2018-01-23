// React Components
import React from 'react';

// Grommet Components
import TableHeader from 'grommet/components/TableHeader';
import App from 'grommet/components/App';
import TableRow from 'grommet/components/TableRow';
import Table from 'grommet/components/Table';
import Status from 'grommet/components/icons/Status';
import Anchor from 'grommet/components/Anchor';
import Headline from 'grommet/components/Headline';

// Internal Components
import InvModal from './InvModal'

const Inventory = ({ inventory, selectItem, inventoryItem, displayModal, hideModal }) => {

  return (
    <App>
      <Headline>Inventory</Headline>
      {
        selectItem &&
        <InvModal inventoryItem={inventoryItem}
                  selectItem={selectItem}
                  hideModal={hideModal}
        />
      }
      <Table responsive={false} >
        <TableHeader labels={['Item Code', 'Name', 'Category', 'Quantity', 'Par Level']} sortIndex={0} sortAscending={true}/>
        <tbody>
          {
            inventory.map(item => (
              <TableRow>
              <td>
                <Anchor onClick={() => {
                  displayModal(item)}}>
                  {item.code}
                </Anchor>
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
                <Status value={item.quantity > item.parLevel ? 'ok' : 'warning'}/>
              </td>
            </TableRow>))
          }
        </tbody>
      </Table>
    </App>
  )
}

export default Inventory;
