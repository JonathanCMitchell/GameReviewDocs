import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Mainbar from './Mainbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <h1>Welcome to the documentation</h1>
        <div className="container">
        <Sidebar />
        <Mainbar />
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App
