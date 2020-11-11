import * as types from './types';

export const getTodosAction = (category) => ({
    type: types.GET_TODOS,
    payload: { category },
});

// ---------------------------------------------------------------------------------------------------------------------
export const addTodoAction = (todo) => ({
    type: types.ADD_TODO,
    payload: { todo },
});

export const postTodoAction = (category, value) => ({
    type: types.POST_TODO,
    payload: { category, value },
});

export const setTodosAction = (todoList) => ({
    type: types.SET_TODOS,
    payload: { todoList },
});

export const deleteTodoAction = (id) => ({
    type: types.DELETE_TODO,
    payload: { id },
});

export const setTodoCompletedAction = (id) => ({
    type: types.SET_TODO_COMPLETED,
    payload: { id },
});

export const setTodoImportantAction = (id) => ({
    type: types.SET_TODO_IMPORTANT,
    payload: { id },
});

export const setTodoProcessAction = (id) => ({
    type: types.SET_TODO_PROCESS,
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

export const postTodoDescriptionAction = (category, id, description) => ({
    type: types.POST_TODO_DESCRIPTION,
    payload: { category, id, description },
});

export const postTodoTitle = (category, id, title) => ({
    type: types.POST_TODO_TITLE,
    payload: { category, id, title },
});
