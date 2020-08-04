export default function TotalReducer(state = initialState, action) {

    switch (action.type) {
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