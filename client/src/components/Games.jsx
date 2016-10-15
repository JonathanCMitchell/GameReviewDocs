import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import GamesTable from './GamesTable';
import GamesSandbox from './GamesSandbox';
import GamesHeader from './GamesHeader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

// class Games extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     expanded: false
//     };
//   }

//   render() {
//   return (
//     <div>
//       <Card>
//       <Cardheader >
//       <GamesHeader/>
//       </Cardheader>
//       <GamesTable expandable={true}/>
//       <GamesSandbox expandable={true}/>
//       </Card>
//     </div>
//       )
//   }
// }
class Games extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="/api/search/games"
          subtitle="type: GET"
          avatar="../../assets/images/console_games_API_pic.png" 
          actAsExpander={true}
          showExpandableButton={true}
        />
        
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Click here to experiment with this endpoint."
          />
        </CardText>
        <CardMedia
          expandable={true}
        >
        <GamesHeader />
         <GamesTable/>
        </CardMedia>
        <CardTitle title="Enter your parameters and try it out for yourself below." subtitle="Card subtitle" expandable={true} />
          <GamesSandbox expandable={true}/>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}


export default Games;