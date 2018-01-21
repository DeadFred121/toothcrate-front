
// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';

// Internal Components
import OptionControls from './OptionControls';


class OrderStock extends Component {
  render() {
    return (
      <App>
        <SearchInput
          placeHolder='Enter Supplier'
          suggestions={['HSH', 'Horsley', 'Crown', 'Dentists R Us']}
          size="med"
        />

        <Headline>Supplier</Headline>
        <hr />

      </App>
    )
  }
}

export default OrderStock;
