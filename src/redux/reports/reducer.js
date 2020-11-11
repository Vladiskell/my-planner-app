import * as types from './types';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_REPORTS:
            return [...action.payload.reports].sort((a, b) => (a.date > b.date ? 1 : -1));
        case types.ADD_REPORT:
            return [...state, action.payload.report];
        case types.DELETE_REPORT:
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
};

export default reducer;
