
// React Components
import React, { Component } from 'react';

// Grommet Components
import Select from 'grommet/components/Select';

class ControlledSelect extends Component {
  state = {
    value: null
  }

  constructor(props) {
    super(props);

    this.setState({
      value: props.defaultValue || null
    });
  }

  // Function to change defaultValue to input value through state
  changeHandler = ({ value }) => {
    this.setState({ value: value.value || value })
  };

  render() {
    const { options, name, placeHolder } = this.props;
    const { value } = this.state;

    return (
      <Select name={name}
        placeHolder={placeHolder}
        inline={false}
        multiple={false}
        options={options}
        onChange={this.changeHandler}
        value={value}
      />
    );
  }
}

export default ControlledSelect;