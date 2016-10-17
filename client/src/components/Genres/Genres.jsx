import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import GenresTable from './GenresTable';
import GenresSandbox from './GenresSandbox';
import GenresSearchbox from './GenresSearchbox';

class Genres extends Component {
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
          title="/api/search/genres"
          subtitle="type: GET"
          avatar="../../assets/images/sword_icon.png" 
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

        <GenresSearchbox />
        <GenresTable />        
        </CardMedia>
        <CardTitle className="Card" title="Enter your parameters and try it out for yourself below." subtitle="Card subtitle" expandable={true} />
          <GenresSandbox expandable={true}/>
        <CardActions className="Expander">
          <FlatButton className="Expand-Flatbutton" label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton className="Reduce-Flatbutton" label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}


export default Genres;