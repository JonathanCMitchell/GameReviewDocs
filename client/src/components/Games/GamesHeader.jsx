import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AutoComplete from 'material-ui/AutoComplete';
import cache from '../../../data/cache.js'
import _ from 'underscore';

const dataArr = _.keys(cache)


const GamesHeader = (props) => {  
  return (
    <div className = "GamesHeader">
    <AutoComplete
      floatingLabelText="Search for available games"
      filter={AutoComplete.fuzzyFilter}
      dataSource={dataArr}
      maxSearchResults={5}
    />
    </div>
      )
}

export default GamesHeader;