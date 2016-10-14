import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import cache  from '../../data/cache';
class GamesSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      score_range: '',
      score: '',
      release_year: '',
      errorTitle: '',
      errorScoreRange: '',
      errorScore: '',
      errorReleaseYear: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onScoreRangeChange = this.onScoreRangeChange.bind(this);
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onEditorsChoiceChange = this.onEditorsChoiceChange.bind(this);
    this.onReleaseYearChange = this.onReleaseYearChange.bind(this);
  }
  onTitleChange(event) {
    const regex = /^[A-Z]/; // limits string length, min 1, max 50, letters only
    this.setState({
      title: event.target.value,
    });

    if (cache[event.target.value]) {
    // if (regex.test(event.target.value)) {
      this.setState({ errorTitle: '' });
    }
    else {
      this.setState({ errorTitle: 'Invalid title' });
    }
  }

  onScoreRangeChange(event) {
    const regex = /^[0-9], ([1-9]|10)$/g
    this.setState({
      score_range: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ errorScoreRange: ''});
    } else {
      this.setState({ errorScoreRange: 'Invalid score range'});
    }
  }

  onScoreChange(event) {
    const regex = /^([1-9]|10)$/g;
    this.setState({
      score: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ errorScore: ''});
    } else {
      this.setState({ errorScore: 'Invalid score'});
    }
  }

  onEditorsChoiceChange(event) {
    const regex = /^1|0$/g;
    this.setState({
      editors_choice: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ errorEditorsChoice: '' });
    } else {
      this.setState({ errorEditorsChoice: 'Invalid editors choice parameter'});
    }
  }
  onReleaseYearChange(event) {
    const regex = /^(199[6-9]|200[0-9])|(201[0-6])$/;
    this.setState({
      release_year: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ errorReleaseYear: '' });
    } else {
      this.setState({ errorReleaseYear: 'Invalid release year parameter'});
    }
  }



  render() {
    return (
      <div>
      <form>
        <TextField
            floatingLabelText="score_range"
            className="score_range-input-text"
            onChange={this.onScoreRangeChange}
            value={this.state.score_range}
            hintText="score_range"
            errorText={this.state.errorScoreRange}
            underlineShow={false}
          />
          <Divider />
          <TextField
            floatingLabelText="score"
            className="score-input-text"
            onChange={this.onScoreChange}
            value={this.state.score}
            hintText="score"
            errorText={this.state.errorScore}
            underlineShow={false}
          />
          <Divider />
          <TextField
            floatingLabelText="editors_choice"
            className="editors_choice-input-text"
            onChange={this.onEditorsChoiceChange}
            value={this.state.editors_choice}
            hintText="editors choice"
            errorText={this.state.errorEditorsChoice}
            underlineShow={false}
          />
          <Divider />
        <TextField
            floatingLabelText="title"
            className="title-input-text"
            onChange={this.onTitleChange}
            value={this.state.title}
            hintText="Title"
            errorText={this.state.errorTitle}
            underlineShow={false}
          />
          <TextField
            floatingLabelText="release_year"
            className="title-release_year-text"
            onChange={this.onReleaseYearChange}
            value={this.state.release_year}
            hintText="Title"
            errorText={this.state.errorReleaseYear}
            underlineShow={false}
          />
         
      </form>
      <h1>Hello we are inside GamesSandbox</h1>
      <p>This will be received data sandbox</p>
      </div>
      );
  }
}

export default GamesSandbox;