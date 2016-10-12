import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes
import routes from './routes';
const styles = require('../assets/styles/main.scss');


ReactDOM.render(
    <Router history={browserHistory}>
      {routes}
    </Router>
  , document.getElementById('app')
);
