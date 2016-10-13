import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import GamesTable from './GamesTable';
import Paper from 'material-ui/Paper';





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
    </div>
      )
  }
}

export default Games;