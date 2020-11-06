import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import listReducer from './listReducer';
import listFilterReducer from './listFilterReducer';
import currentTodoReducer from './currentTodoReducer';

export default combineReducers({
    currentCategory: categoryReducer,
    currentTodo: currentTodoReducer,
    list: listReducer,
    listFilter: listFilterReducer,
});
