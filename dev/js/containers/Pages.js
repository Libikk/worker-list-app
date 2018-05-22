import React from 'react';

import { connect } from 'react-redux';
import { numPerPage } from '../actions/index';
import { bindActionCreators } from 'redux';

class Pages extends React.Component {
    render() {
        return (
            <ul className={"pages"}> Page:
                    1, 2, 3, 4
            </ul>
        );
    };
};
function mapStateToProps(state) {
    return {
        employeeListLength: state.employeeList.employee.length,
        numPerPage: state.numPerPage,
    };
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({numPerPage: numPerPage}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Pages);
