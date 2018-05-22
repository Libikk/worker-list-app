const initialState = 5;

export default function (state = initialState, action) {
    switch (action.type) {

        case 'NUMBER_PER_PAGE':
          return action.payload;
          break;
    }
    return state;
}
