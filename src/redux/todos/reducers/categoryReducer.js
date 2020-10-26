import * as types from '../actionTypes/actionTypes';

const initialState = 'coding';

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODO_CATEGORY: {
            return action.payload.category;
        }
        default:
            return state;
    }
};

export default categoryReducer;
