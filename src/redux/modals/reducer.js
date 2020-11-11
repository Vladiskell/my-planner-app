import * as types from './types';

const initialState = false;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODALS:
            return action.payload.open;
        case types.CLOSE_MODALS:
            return action.payload.open;
        default:
            return state;
    }
};

export default reducer;
