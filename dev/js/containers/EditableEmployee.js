import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEmployee, editView, addNewEmployee, currentPageNum } from '../actions/index';

class EditableLine extends React.Component {
  constructor(props) {
    super()
    this.state = {
      id: props.employee.id,
      firstName: props.employee.firstName,
      sureName: props.employee.sureName,
      age: props.employee.age,
      position: props.employee.position,
      editOption: false,
      edit: props.edit
    };
  };
    updateCells(event) {this.setState({[event.target.className]: event.target.value})}
    updateState(event) { this.setState({[event.target.className]: event.target.value})}
    addNewGuy() {((this.state.id !== "" & !this.props.employeeIdList.includes(this.state.id)) 
            ? (this.props.addNewEmployee(this.state), this.props.currentPageNum(this.props.showPageWithNewEmployee))
            : alert("Sorry but ID exist already"))

        this.setState({id:"", firstName:"", sureName: "", age: "", position: ""})
    };

  render() {
    const editOrNew = this.state.edit ? <td className="action"><button onClick={() => this.props.updateEmployee({id: this.props.employee.id, data: this.state})}><i className="fas fa-check"></i></button>
                                        <button onClick={() => this.props.editView({id: this.props.employee.id, boolean: false})}><i className="fas fa-times"></i></button></td>               
                                      : <td className="action"><button onClick={this.addNewGuy.bind(this)}><i className="fas fa-plus-square"></i></button></td>
    return (
      <tr>
            <td><input onChange={this.updateCells.bind(this)} className="id" type="text" placeholder="Id" value={this.state.id}></input></td>
            <td><input onChange={this.updateCells.bind(this)} className="firstName" type="text" placeholder="FirstName" value={this.state.firstName}></input></td>
            <td><input onChange={this.updateCells.bind(this)} className="sureName" type="text" placeholder="SureName" value={this.state.sureName}></input></td>
            <td><input onChange={this.updateCells.bind(this)} className="age" type="text" placeholder="Age" value={this.state.age}></input></td>
            <td><input onChange={this.updateCells.bind(this)} className="position" type="text" placeholder="Position" value={this.state.position}></input></td>
            {editOrNew}
      </tr>
    );
  };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        updateEmployee: updateEmployee,
        editView: editView,
        addNewEmployee: addNewEmployee,
        currentPageNum: currentPageNum
    }, dispatch);
};
function mapStateToProps(state) {
    return {
        employeeIdList: state.employeeList.map(singleEmployee => singleEmployee.id),
        showPageWithNewEmployee: Math.ceil((state.employeeList.length + 1) / state.numPerPage)
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(EditableLine);