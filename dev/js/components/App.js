import React from 'react';

import { connect } from 'react-redux';
import { addNewEmployee, numPerPage, currentPageNum } from '../actions/index';
import { bindActionCreators } from 'redux';

import PerPage from '../containers/PerPage';
import Table from '../containers/Table';
import NotEditableEmployee from '../containers/NotEditableEmployee';
import EditableEmployee from '../containers/EditableEmployee';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

class App extends React.Component {
    render() {
        const {employeeList, numPerPage, currPageNum, atoZorZtoA } = this.props
        //page calculator logic
        const indexOfLastEmployee = currPageNum * numPerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - numPerPage ;
        const currentEmployee = employeeList.slice(indexOfFirstEmployee, indexOfLastEmployee);
        const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(employeeList.length / numPerPage); i++) {
              pageNumbers.push(i);
            }
            
        const renderPageNumbers = pageNumbers.map(number => {
            return number === currPageNum ? (<li key={number} id={number} onClick={() => this.props.currentPageNum(number)}><a href="#"><i><u>{number}</u></i></a></li>) 
                                          : (<li key={number} id={number} onClick={() => this.props.currentPageNum(number)}><a href="#">{number}</a></li>)                                            
        })

        const listToRender = currentEmployee.map((person, i) =>
            person.editOption ? <EditableEmployee key={person.id} employee={person} edit={true}/>
                              : <NotEditableEmployee key={person.id} employee={person}/>
        )
        return (
            <div className="app-container">
                <Header />
                <PerPage />
                <ul className={"pages"}> Page:
                    {renderPageNumbers}
                </ul>
                <table>
                    <tbody>
                        <Table />
                        {listToRender}
                        <EditableEmployee employee={{id: "", firstName: "", sureName: "", age: "", position: ""}} edit={false} />
                    </tbody>
                </table>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employeeList: state.employeeList,
        numPerPage: state.numPerPage,
        currPageNum: state.currentPageNum
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({numPerPageAction: numPerPage, currentPageNum: currentPageNum}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(App);