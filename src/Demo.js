
import React from 'react';
import LifecycleMethods from './LifeCycleMethods';

class Demo extends React.Component {
  constructor() {
    super();

    this.state = {
      displayComponent: false,
      componentText: new Date().toLocaleString(),
    };
  }

  loadComponent = () => {
    this.setState({ displayComponent: true });
  }

  unloadComponent = () => {
    this.setState({ displayComponent: false });
  }

  updateComponent = () => {
    this.setState({
      componentText: new Date().toLocaleString(),
    });    
  }

  render() {
    return this.state.displayComponent ?
      (
        <div>
          <div>
            <button type='button' onClick={this.unloadComponent}>Unload Component</button>
            <button type='button' onClick={this.updateComponent}>Update Component</button>
          </div>
          <LifecycleMethods text={this.state.componentText} />
        </div>
      ) : (
        <div>
          <button type='button' onClick={this.loadComponent}>Load Component</button>
        </div>
      );
  }
}

export default Demo;