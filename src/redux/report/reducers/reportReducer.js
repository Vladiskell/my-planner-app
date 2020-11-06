import * as types from '../actionTypes/actionTypes';

const initialState = [];

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_REPORT_LIST:
            return [...action.payload.reportList].sort((a, b) => (a.date > b.date ? 1 : -1));
        case types.REPORT_ADD:
            return [...state, action.payload.todo];
        default:
            return state;
    }
};

export default reportReducer;
