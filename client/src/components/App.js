import React, { Component } from 'react';
import Topbar from './Topbar';
import Mainbar from './Mainbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <div className="container">
        <Topbar />
        <Mainbar />
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App
