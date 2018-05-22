import React from "react";

import { removeEmployee, currentPageNum, editView } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class NotEditableLine extends React.Component {
  render() {
    const employeeData = this.props.employee;
    const dataToChangeView = {
      id: this.props.employee.id,
      boolean: true
    }
    return (
        <tr>
            <td>{employeeData.id}</td>
            <td>{employeeData.firstName}</td>
            <td>{employeeData.sureName}</td>
            <td>{employeeData.age}</td>
            <td>{employeeData.position}</td>
            <td className="action">
              <button onClick={() => this.props.editView(dataToChangeView)}><i className="fas fa-edit"></i></button>
              <button onClick={() => {this.props.removeEmployee(employeeData.id), this.props.currentPageNum(1)}}><i className="fas fa-minus-circle"></i></button>
            </td>
      </tr>
    );
  }
};

function mapStateToProps(state) {
  return {
    //dont need this function 
  };
};

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    removeEmployee: removeEmployee, 
    currentPageNum: currentPageNum,
    editView: editView
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(NotEditableLine);