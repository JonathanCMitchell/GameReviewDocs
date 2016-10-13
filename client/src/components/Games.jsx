import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import GamesTable from './GamesTable';
import Paper from 'material-ui/Paper';
import GamesSandbox from './GamesSandbox';




class Games extends Component {
  constructor(props) {
  super(props);
  }

  render() {
  return (
    <div>
      <GamesTable/>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
      <GamesSandbox />
    </div>
      )
  }
}

export default Games;