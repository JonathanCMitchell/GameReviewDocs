import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Mainbar from './Mainbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the documentation</h1>
        <div className="container">
        <Sidebar />
        <Mainbar />
        </div>
      </div>
    );
  }
}
