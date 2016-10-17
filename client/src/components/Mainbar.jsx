import React, { Component } from 'react';

import Games from './Games/Games';
import Genres from './Genres/Genres';
import Platforms from './Platforms/Platforms';
import Divider from 'material-ui/Divider';



class Mainbar extends Component {
  render() {
    return (
      <div className="mainbar">
        <p>This is mainbar</p>
        <Games />
        <Divider />
        <Genres />
        <Platforms />
      </div>
    );
  }
}

export default Mainbar
