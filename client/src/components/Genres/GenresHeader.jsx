import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AutoComplete from 'material-ui/AutoComplete';
import cache from '../../../data/genresCache.js'
import _ from 'underscore';
import GenresList from './GenresList'

const dataArr = _.keys(cache);


const GenresHeader = (props) => {  
  return (
    <div className = "GenresHeader row">
    <AutoComplete
      floatingLabelText="Search for available genres"
      filter={AutoComplete.fuzzyFilter}
      dataSource={dataArr}
      maxSearchResults={5}
      className="col-md-2"
    />
    <GenresList className="row col-md-4 col-md-offset-2"/>
    </div>
      )
}

export default GenresHeader;