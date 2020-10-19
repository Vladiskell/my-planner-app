import { uuid } from 'uuidv4'
import * as types from '../constants/actionTypes'

export const addTodoAction = (text) => ({
    type: types.ADD_TODO,
    payload: {
        id: uuid(),
        text,
        completed: false,
        important: false,
        process: false,
    },
})

export const setTodoListAction = (todoList) => ({
    type: types.SET_TODO_LIST,
    payload: { todoList },
})

export const deleteTodoAction = (id) => ({
    type: types.DELETE_TODO,
    payload: { id },
})

export const setTodoIsCompletedAction = (id) => ({
    type: types.SET_IS_TODO_COMPLETED,
    payload: { id },
})

export const setTodoIsImportantAction = (id) => ({
    type: types.SET_IS_TODO_IMPORTANT,
    payload: { id },
})

export const setTodoIsProcessAction = (id) => ({
    type: types.SET_IS_TODO_PROCESS,
    payload: { id },
})

export const editTodoAction = (id, text) => ({
    type: types.EDIT_TODO,
    payload: { id, text },
})

export const setTodoDescriptionAction = (id, description) => ({
    type: types.SET_TODO_DESCRIPTION,
    payload: { id, description },
})

export const setCurrentTodoAction = (id) => ({
    type: types.SET_CURRENT_TODO,
    payload: { id },
})
