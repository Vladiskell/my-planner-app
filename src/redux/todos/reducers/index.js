import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import listReducer from './listReducer';
import reportReducer from './reportReducer';
import listFilterReducer from './listFilterReducer';
import currentTodoReducer from './currentTodoReducer';

export default combineReducers({
    category: categoryReducer,
    currentTodo: currentTodoReducer,
    list: listReducer,
    listFilter: listFilterReducer,
    report: reportReducer,
});
