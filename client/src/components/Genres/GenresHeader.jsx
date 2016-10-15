import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AutoComplete from 'material-ui/AutoComplete';
import cache from '../../../data/genres.js'
import _ from 'underscore';

const dataArr = _.keys(cache);


const GenresHeader = (props) => {  
  return (
    <div className = "GenresHeader">
    <AutoComplete
      floatingLabelText="Search for available genres"
      filter={AutoComplete.fuzzyFilter}
      dataSource={dataArr}
      maxSearchResults={5}
    />
    </div>
      )
}

export default GenresHeader;