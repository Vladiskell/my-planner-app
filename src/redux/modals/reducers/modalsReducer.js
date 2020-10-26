import * as types from '../actionTypes/actionTypes';

const initialState = false;

const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MODALS_OPEN:
            return action.payload.open;
        case types.MODALS_CLOSE:
            return action.payload.open;
        default:
            return state;
    }
};

export default modalsReducer;
