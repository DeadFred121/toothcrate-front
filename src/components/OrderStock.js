
// React Components
import React, { Component } from 'react';

// Grommet Components
import SearchInput from 'grommet/components/SearchInput';
import App from 'grommet/components/App'
import Headline from 'grommet/components/Headline';

// Internal Components
import EntryShow from './components/EntryShow';
import OptionControls from './components/OptionControls';


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
        <EntryShow />

      </App>
    )
  }
}
