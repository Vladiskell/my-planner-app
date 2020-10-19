import { combineReducers } from 'redux';
import visibilityFilterReducer from "./visibilityFilterReducer";
import mainReducer from './mainReducer'

export default combineReducers({
    mainReducer,
    visibilityFilterReducer
})
