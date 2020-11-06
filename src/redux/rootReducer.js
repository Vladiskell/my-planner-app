import { combineReducers } from 'redux';

import todosReducer from './todos/reducers';
import modalsReducer from './modals/reducers/modalsReducer';
import reportReducer from './report/reducers/reportReducer';

export default combineReducers({
    todos: todosReducer,
    modals: modalsReducer,
    report: reportReducer,
});
