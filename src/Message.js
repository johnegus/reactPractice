import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);

        // TODO Initialize state, etc.
      }

  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

export default Message;