const initialState = [
  {
    id:"J89F4WIO", firstName: "Edward", sureName: "Summer", age: 24, position: "Shift Manager", editOption: false
  },
  {
    id:"T34F33DF", firstName: "Poul", sureName: "Winter", age: 15, position: "Shift Supervisor", editOption: false
  },
  {
    id:"T34F45DF", firstName: "Jack", sureName: "Winner", age: 33, position: "Shift Support", editOption: false
  },
  {
    id:"B5B435B3", firstName: "Max", sureName: "Loser", age: 22, position: "Shift Support", editOption: false
  },
  {
    id:"B3453", firstName: "Olivia", sureName: "Best", age: 31, position: "Shift Support", editOption: false
  },
  {
    id:"5B3453B3", firstName: "AJ", sureName: "Ugly", age: 11, position: "Shift Support", editOption: false
  },
  {
    id:"B6346B3", firstName: "Mark", sureName: "Mellis", age: 14, position: "Shift Support", editOption: false
  }
];

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
          return state.concat(action.payload);
          break;

        case 'REMOVE_EMPLOYEE':
          let updatedList = [];
          const updatedState = state.forEach(employee => {
            if (employee.id !== action.payload) {
              updatedList.push(employee);
            };
          });
          return updatedList;
          break;

        case 'EDIT_VIEW':
          const completeNewState = state.map(employee => {
             return (employee.id === action.payload.id) ? Object.assign({}, employee, { editOption : action.payload.boolean }) : employee
          })
            return completeNewState;
            break;
        case 'UPDATE_EMPLOYEE':
          const updatedEmployeeList = state.map(employee => {
             return (employee.id === action.payload.id) ? Object.assign({}, employee, action.payload.data) : employee
          })
            return updatedEmployeeList;
            break;
          
        case 'SORT_COLUMN':
            let newState = [...state];
            newState.sort(function(a,b){ return a[action.payload.column] > b[action.payload.column] });
          return action.payload.wayAndColumnToSort ? newState : newState.reverse();
          break; 
    };
    return state;
};
