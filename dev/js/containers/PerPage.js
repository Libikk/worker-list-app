import React from 'react';

import { connect } from 'react-redux';
import { numPerPage, currentPageNum } from '../actions/index';
import { bindActionCreators } from 'redux';

class PerPage extends React.Component {
    render() {
        return (
            <div>
                <ul className={"perPage"}>Per Page:
                    <li onClick={() => {this.props.numPerPage(5), this.props.currentPageNum(1)}}><a href="#">[5]</a></li>
                    <li onClick={() => {this.props.numPerPage(10), this.props.currentPageNum(1)}}><a href="#">[10]</a></li> 
                    <li onClick={() => {this.props.numPerPage(15), this.props.currentPageNum(1)}}><a href="#">[15]</a></li> 
                    <li onClick={() => {this.props.numPerPage(20), this.props.currentPageNum(1)}}><a href="#">[20]</a></li> 
                </ul>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        employeeList: state.employeeList.employee
    };
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        numPerPage: numPerPage,
        currentPageNum: currentPageNum
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(PerPage);