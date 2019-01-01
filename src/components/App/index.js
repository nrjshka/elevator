import React, { Component } from 'react';
import { Elevator, Panel } from '../index';

class App extends Component {
  render() {
    return (
      <div className="elevator-container">
        <Elevator />
        <Panel />
      </div>
    );
  }
}

export default App;
