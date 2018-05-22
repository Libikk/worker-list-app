import React from 'react';

import { connect } from 'react-redux';
import {sortColumn } from '../actions/index';
import { bindActionCreators } from 'redux';

class Table extends React.Component {
    constructor(props) {
        super()
        this.state = {
          arrowUpOrDown: false,
          columns : [
            { sortView: false, className: "id" },
            { sortView: false, className: "firstName" },
            { sortView: false, className: "sureName" },
            { sortView: false, className: "age" },
            { sortView: false, className: "position" },
          ]
        };
      };
    
      selectColumnToSort(targetToSort) {
        const newColumnState = this.state.columns.map(column => {
          if (column.className === targetToSort) {
            return {
              sortView: true,
              className: column.className
            };
          };
          return {
            sortView: false,
            className: column.className
          };
        });
        this.setState({
          columns: newColumnState,
          arrowUpOrDown: !this.state.arrowUpOrDown
        });
        this.props.sortColumn({column: targetToSort, wayAndColumnToSort: this.state.arrowUpOrDown})
      };
    render() {
        const arrowUpOrDown = this.state.arrowUpOrDown ? "Z-A" : "A-Z";
        return (
            <tr>
                <th onClick={() => this.selectColumnToSort("id")}>Id: {this.state.columns[0].sortView ? arrowUpOrDown : ''}</th>
                <th onClick={() => this.selectColumnToSort("firstName")}>First Name: {this.state.columns[1].sortView ? arrowUpOrDown : ''}</th>
                <th onClick={() => this.selectColumnToSort("sureName")}>Sure Name: {this.state.columns[2].sortView ? arrowUpOrDown : ''}</th>
                <th onClick={() => this.selectColumnToSort("age")}>Age: {this.state.columns[3].sortView ? arrowUpOrDown : ''}</th>
                <th onClick={() => this.selectColumnToSort("position")}>Position: {this.state.columns[4].sortView ? arrowUpOrDown : ''}</th>
                <th>Action:</th>
            </tr>
        );
    };
};


function mapStateToProps(state) {
    return {
        //dont need this
    };
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        sortColumn: sortColumn
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Table);