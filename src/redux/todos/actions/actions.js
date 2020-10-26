import * as types from '../actionTypes/actionTypes';
import category from '../reducers/categoryReducer';

export const setCurrentCategory = (category) => ({
    type: types.SET_TODO_CATEGORY,
    payload: { category },
});

export const addTodoAction = (todo) => ({
    type: types.ADD_TODO,
    payload: { todo },
});

export const setTodoListAction = (todoList) => ({
    type: types.SET_TODO_LIST,
    payload: { todoList },
});

export const deleteTodoAction = (id) => ({
    type: types.DELETE_TODO,
    payload: { id },
});

export const setTodoIsCompletedAction = (id) => ({
    type: types.SET_IS_TODO_COMPLETED,
    payload: { id },
});

export const setTodoIsImportantAction = (id) => ({
    type: types.SET_IS_TODO_IMPORTANT,
    payload: { id },
});

export const setTodoIsProcessAction = (id) => ({
    type: types.SET_IS_TODO_PROCESS,
    payload: { id },
});

export const editTodoTitleAction = (id, title) => ({
    type: types.EDIT_TODO_TITLE,
    payload: { id, title },
});

export const editTodoDescriptionAction = (id, description) => ({
    type: types.EDIT_TODO_DESCRIPTION,
    payload: { id, description },
});

export const setCurrentTodoAction = (id) => ({
    type: types.SET_CURRENT_TODO,
    payload: { id },
});

export const todoFilter = (filter) => ({
    type: types.FILTER_TODO,
    payload: filter,
});
