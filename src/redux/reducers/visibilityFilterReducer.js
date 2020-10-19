import * as types from '../constants/actionTypes';

const visibilityFilterReducer = (state = types.VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.payload.filter
        default:
            return state
    }
}

export default visibilityFilterReducer;
