import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const GamesTable = (props) => {
  return (
    <div className="Table-parameters">
      <Table>
    <TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Parameter</TableHeaderColumn>
        <TableHeaderColumn>Located in</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Required</TableHeaderColumn>
        <TableHeaderColumn>Schema</TableHeaderColumn>
        <TableHeaderColumn>Example:</TableHeaderColumn>
      </TableRow>
    </TableHeader>
      <TableBody displayRowCheckbox={false} stripedRows={true}>
      <TableRow striped={true}>
        <TableRowColumn>score_range</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>Range (1 - 10)</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>String</TableRowColumn>
        <TableRowColumn>4, 6</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>score</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>Score (1 - 10)</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>String</TableRowColumn>
        <TableRowColumn>9</TableRowColumn>
      </TableRow>
      <TableRow striped={true}>
        <TableRowColumn>editors_choice</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>1=Y, 0=N</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>Integer</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>title</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>title of game</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>String</TableRowColumn>
        <TableRowColumn>Mario Kart</TableRowColumn>
      </TableRow>
      <TableRow striped={true}>
        <TableRowColumn>release_year</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>Year of release</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>Integer</TableRowColumn>
        <TableRowColumn>2016</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>release_month</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>Month of release</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>Integer</TableRowColumn>
        <TableRowColumn>12</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>release_day</TableRowColumn>
        <TableRowColumn>Query</TableRowColumn>
        <TableRowColumn>Day of release</TableRowColumn>
        <TableRowColumn>No</TableRowColumn>
        <TableRowColumn>Integer</TableRowColumn>
        <TableRowColumn>8</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  </div>
      )
}

export default GamesTable;