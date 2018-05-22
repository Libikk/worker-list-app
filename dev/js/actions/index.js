export const addNewEmployee = (newEmployee) => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: newEmployee
    }
};
export const removeEmployee = (removeThisEmployee) => {
    return {
        type: 'REMOVE_EMPLOYEE',
        payload: removeThisEmployee
    }
};
export const numPerPage = (num) => {
    return {
        type: 'NUMBER_PER_PAGE',
        payload: num
    }
};
export const currentPageNum = (pageNum) => {
    return {
        type: 'CURRENT_PAGE_NUM',
        payload: pageNum
    }
};
export const editView = (idAndBoolean) => {
    return {
        type: 'EDIT_VIEW',
        payload: idAndBoolean
    }
};
export const updateEmployee = (employeeData) => {
    return {
        type: 'UPDATE_EMPLOYEE',
        payload: employeeData
    }
};
export const sortColumn = (wayAndColumnToSort) => {
    return {
        type: 'SORT_COLUMN',
        payload: wayAndColumnToSort
    }
};
