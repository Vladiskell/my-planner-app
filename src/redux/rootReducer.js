import { combineReducers } from 'redux';

import todosReducer from './todos/reducer';
import categoryReducer from './category/reducer';
import modalsReducer from './modals/reducer';
import reportReducer from './reports/reducer';

export default combineReducers({
    todos: todosReducer,
    category: categoryReducer,
    modals: modalsReducer,
    report: reportReducer,
});
