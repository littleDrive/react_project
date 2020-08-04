export default function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NUMBER':
            return Object.assign({}, state, {
                number: action.number,
                total: 0
            });
        case 'ADD':
            return Object.assign({}, state, {
                total: state.total + 1
            });
        case 'SUB':
            return Object.assign({}, state, {
                total: state.total - 1
            });
        default: return state;
    }
}

const initialState = {
    number: 0,
    total: 0
}