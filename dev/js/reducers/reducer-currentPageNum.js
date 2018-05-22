
const initialState = 1;

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CURRENT_PAGE_NUM':
          return action.payload;
          break;
    }
    return state;
}
