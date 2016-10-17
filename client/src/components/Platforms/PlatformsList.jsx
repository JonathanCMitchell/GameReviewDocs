import React, { Component } from 'react';
import platforms from '../../../data/platforms';
import {List, ListItem} from 'material-ui/List';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


class PlatformsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  renderList() {
    return platforms.map((platform, index) => {
      return (
        <MenuItem
        key={index}
        className="platform-list"
        primaryText = {platform.console_name}
        />
        )
    })
  }
  render() {
    return (
      <div className="PlatformList">
      <FlatButton
          onTouchTap={this.handleTouchTap}
          label="Click me to search for platforms"
        />
         <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            {this.renderList()}
          </Menu>
        </Popover>
        </div>
      )
  }
}

export default PlatformsList