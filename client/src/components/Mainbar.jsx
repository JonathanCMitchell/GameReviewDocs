import React, { Component } from 'react';

import Games from './Games/Games';
import Genres from './Genres';

export default class Mainbar extends Component {
  render() {
    return (
      <div className="mainbar">
        <p>This is mainbar</p>
        <Games />
      </div>
    );
  }
}
