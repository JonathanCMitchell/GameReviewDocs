import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AutoComplete from 'material-ui/AutoComplete';
import cache from '../../../data/platformsCache.js'
import _ from 'underscore';
import PlatformsList from './PlatformsList'

const dataArr = _.keys(cache);


const PlatformsSearchbox = (props) => {  
  return (
    <div className = "Searchbox row">
    <AutoComplete
      floatingLabelText="Search for available Platforms"
      filter={AutoComplete.fuzzyFilter}
      dataSource={dataArr}
      maxSearchResults={5}
      className="col-md-2"
    />
    <PlatformsList Searchbox-List row col-md-4 col-md-offset-2/>
    </div>
      )
}

export default PlatformsSearchbox;