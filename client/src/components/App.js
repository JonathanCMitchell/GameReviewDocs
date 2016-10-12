import React, { Component } from 'react';
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the documentation</h1>
        <div className="container">
        <Sidebar />
          {this.props.children}
        </div>
      </div>
    );
  }
}
