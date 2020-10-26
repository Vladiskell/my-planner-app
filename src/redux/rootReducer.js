import { combineReducers } from 'redux';

import todosReducer from './todos/reducers';
import modalsReducer from './modals/reducers/modalsReducer';

export default combineReducers({
    todos: todosReducer,
    modals: modalsReducer,
});
