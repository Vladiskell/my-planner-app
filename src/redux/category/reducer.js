import * as types from './types';

const initialState = 'coding';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORY: {
            return action.payload.category;
        }
        default:
            return state;
    }
};

export default reducer;
