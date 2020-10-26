import * as types from '../actionTypes/actionTypes';

const initialState = 'all';

const listFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TODO:
            return action.payload;
        default:
            return state;
    }
};

export default listFilterReducer;
