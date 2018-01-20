import React, {Component} from 'react';

import App from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';

export default class Model extends Component {
  render() {
    return (<App>
      <Layer closer={true}
             overlayClose={true}
             flush={true}>
        <Heading tag='h1' truncate={true}>
          Item Model
        </Heading>
      </Layer>
    </App>);
  }
}
