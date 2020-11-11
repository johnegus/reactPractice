import React from 'react';

class LifecycleMethods extends React.Component {
  componentDidMount() {
    debugger;
  }

  componentDidUpdate() {
    debugger;
  }

  componentWillUnmount() {
    debugger;
  }

  render() {
    return (
    <h2>{this.props.text}</h2>
    );
  }
}

export default LifecycleMethods;