import {combineReducers} from 'redux';
import Employee from './reducer-EmployeeList';
import NumPerPage from './reducer-numPerPage';
import currentPageNum from './reducer-currentPageNum';



/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    employeeList: Employee,
    numPerPage: NumPerPage,
    currentPageNum: currentPageNum
});

export default allReducers
