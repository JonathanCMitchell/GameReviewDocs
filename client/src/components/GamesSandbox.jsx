import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class GamesSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      score_range: '',
      errorFirstName: '',
      errorScoreRange: '',
    };
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onScoreRangeChange = this.onScoreRangeChange.bind(this);
  }
  onFirstNameChange(event) {
    const regex = /^[a-zA-Z]{1,50}$/; // limits string length, min 1, max 50, letters only
    this.setState({
      firstName: event.target.value
    });

    if (regex.test(event.target.value)) {
      this.setState({ errorFirstName: '' });
    }
    else {
      this.setState({ errorFirstName: 'Invalid input' });
    }
  }

  onScoreRangeChange(event) {
    const regex = /^[0-9], ([1-9]|10)$/g
    this.setState({
      score_range: event.target.value
    });

    if (regex.test(event.target.value)) {
      this.setState({ errorScoreRange: ''});
    } else {
      this.setState({ errorScoreRange: 'Invalid score range'});
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
        <TextField
            floatingLabelText="first name"
            className="auth-input-text"
            onChange={this.onFirstNameChange}
            value={this.state.firstName}
            hintText="First Name"
            errorText={this.state.errorFirstName}
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