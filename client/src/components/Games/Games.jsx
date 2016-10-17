import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import GamesTable from './GamesTable';
import GamesSandbox from './GamesSandbox';
import GamesSearchbox from './GamesSearchbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

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
          title="http://gamereviewapi.herokuapp.com/api/search/games"
          subtitle="type: GET"
          avatar="../../assets/images/console_games_API_pic.png" 
          actAsExpander={true}
          showExpandableButton={true}
          className="Card-Header"
        />
        
        <CardText className="Slidebar">
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
        <GamesSearchbox/>
         <GamesTable/>
        </CardMedia>
        <CardTitle className="Card" 
        title="Enter your parameters and try it out for yourself below." 
        subtitle="Please see rules below: " 
        expandable={true} />
          <CardText className="Card-Explanation text-center" expandable={true}>
            <p>Every parameter is optional.</p>
            <p>You may specify either score or score_range but not both.</p>
            <p>If you specify both parameters, score will take precedence.</p>
            <p>You may omit any parameter, such as include release_day but ommit release_year.</p>
            <p>If you are searching by title, you do not have to use any other parameter.</p>
          </CardText>
          <GamesSandbox expandable={true}/>
        <CardActions className="Expander">
          <FlatButton className="Expand-Flatbutton" label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton className="Reduce-Flatbutton" label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}


export default Games;