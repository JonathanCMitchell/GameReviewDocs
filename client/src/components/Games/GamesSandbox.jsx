import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import cache from '../../../data/cache';
import axios from 'axios';


class GamesSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      score_range: '',
      score: '',
      release_year: '',
      release_month: '',
      release_day: '',
      editors_choice: '',
      errorEditorsChoice: '',
      errorTitle: '',
      errorScoreRange: '',
      errorScore: '',
      errorReleaseYear: '',
      errorReleaseMonth: '',
      errorReleaseDay: '',
      data: '',
      showResponse: false,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onScoreRangeChange = this.onScoreRangeChange.bind(this);
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onEditorsChoiceChange = this.onEditorsChoiceChange.bind(this);
    this.onReleaseYearChange = this.onReleaseYearChange.bind(this);
    this.onReleaseMonthChange = this.onReleaseMonthChange.bind(this);
    this.onReleaseDayChange = this.onReleaseDayChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event) {
    event.preventDefault();
      const options = {};
      if (this.state.score_range)  options.score_range = this.state.score_range
      if (this.state.score)  options.score = this.state.score;
      if (this.state.title !== '') options.title = this.state.title;
      if (this.state.release_year)  options.release_year = this.state.release_year;
      if (this.state.release_month)  options.release_month = this.state.release_month;
      if (this.state.release_day)  options.release_day = this.state.release_day;
      if (this.state.score)  options.score = this.state.score;
      if (this.state.editors_choice) options.editors_choice = this.state.editors_choice;
      const url = '/api/search/games/';
      axios.get(url, { params: options })
      .then((data) => {
        const received = JSON.stringify(data.data);
        this.setState({
          data: received,
          showResponse: true,
        });
      })
      .catch((err) => {
        if (err) console.log('error in get: ', err);
      });
  }


  onTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
    // check cache to see if the item is available in the database;
    if (cache[event.target.value]) {
      this.setState({ errorTitle: '' });
    }
    else {
      this.setState({ errorTitle: 'Invalid title' });
    }
  }

  onScoreRangeChange(event) {
    const regex = /^[0-9], ([1-9]|10)$/g;
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
      this.setState({ errorReleaseYear: 'Invalid release year input'});
    }
  }

  onReleaseMonthChange(event) {
    const regex = /^(0?[1-9]|1[012])$/g;
    this.setState({
      release_month: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ errorReleaseMonth: ''});
    } else {
      this.setState({ errorReleaseMonth: 'Invalid release_month input'});
    }
  }

  onReleaseDayChange(event) {
    const regex = /^([1-9]|[12]\d|3[0-1])$/g;
    this.setState({
      release_day: event.target.value,
    });
    if (regex.test(event.target.value)) {
      this.setState({ errorReleaseDay: ''});
    } else {
      this.setState({ errorReleaseDay: 'Invalid release_day input'});
    }
  }


  render() {
    return (
      <div className = "container-fluid Sandbox">
      <form className="Form col-md-4 row" >
        <Paper zDepth={0} className="Form-paper">
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
          <Divider />
          <TextField
            floatingLabelText="release_year"
            className="release_year-input-text"
            onChange={this.onReleaseYearChange}
            value={this.state.release_year}
            hintText="Release Year"
            errorText={this.state.errorReleaseYear}
            underlineShow={false}
          />
          <Divider />
          <TextField
            floatingLabelText="release_month"
            className="release_month-input-text"
            onChange={this.onReleaseMonthChange}
            value={this.state.release_month}
            hintText="Release Month"
            errorText={this.state.errorReleaseMonth}
            underlineShow={false}
          />
          <Divider />
          <TextField
            floatingLabelText="release_day"
            className="release_day-input-text"
            onChange={this.onReleaseDayChange}
            value={this.state.release_day}
            hintText="Release day"
            errorText={this.state.errorReleaseDay}
            underlineShow={false}
          />
          <Divider />
          </Paper>
          <FlatButton className="col-md-6 col-md-offset-3"
            type="submit"
            label="Submit"
            labelStyle={{color: 'white'}}
            backgroundColor='#677077'
            onClick = {this.onFormSubmit}
          />
      </form>
      <Paper zDepth={1} className={this.state.showResponse == true ? 
        'games-response col-md-8' : 
        'games-response-hidden col-md-8'} 
      >
      <p className="games-response-inside">{this.state.data}</p>
      </Paper>
      </div>
      );
  }
}

export default GamesSandbox;