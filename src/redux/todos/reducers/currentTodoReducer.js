import * as types from '../actionTypes/actionTypes';

const initialState = '';

const currentTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_TODO:
            return action.payload.id;
        default:
            return state;
    }
};

export default currentTodoReducer;
