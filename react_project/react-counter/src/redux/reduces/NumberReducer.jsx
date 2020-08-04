export default function NumberReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NUMBER':
            return Object.assign({}, state, {
                number: action.number,
            });

        default: return state;
    }
}

const initialState = {
    number: 0,
    total: 0
}