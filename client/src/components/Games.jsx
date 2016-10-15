import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import GamesTable from './GamesTable';
import GamesSandbox from './GamesSandbox';
import GamesHeader from './GamesHeader';



class Games extends Component {
  constructor(props) {
  super(props);
  }

  render() {
  return (
    <div>
      <GamesHeader/>
      <GamesTable/>
      <GamesSandbox />
    </div>
      )
  }
}

export default Games;