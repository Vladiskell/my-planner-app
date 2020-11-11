import * as types from './types';
import { combineReducers } from 'redux';

const currentTodoReducer = (state = '', action) => {
    switch (action.type) {
        case types.SET_CURRENT_TODO:
            return action.payload.id;
        default:
            return state;
    }
};

const listReducer = (state = [], action) => {
    switch (action.type) {
        case types.SET_TODOS:
            return [...action.payload.todoList].sort((item) => (item.statuses.completed ? -1 : 1));
        case types.ADD_TODO:
            return [...state, action.payload.todo];
        case types.SET_TODO_COMPLETED:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.statuses.completed = !item.statuses.completed;
                    item.statuses.important = false;
                    item.statuses.process = false;
                    return item;
                } else {
                    return item;
                }
            });
        case types.SET_TODO_IMPORTANT:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.statuses.completed = false;
                    item.statuses.important = !item.statuses.important;
                    return item;
                } else {
                    return item;
                }
            });
        case types.SET_TODO_PROCESS:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.statuses.completed = false;
                    item.statuses.process = !item.statuses.process;
                    return item;
                } else {
                    return item;
                }
            });
        case types.EDIT_TODO_TITLE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    return item;
                } else {
                    return item;
                }
            });
        case types.EDIT_TODO_DESCRIPTION:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.description = action.payload.description;
                    return item;
                } else {
                    return item;
                }
            });
        case types.DELETE_TODO:
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
};

export default combineReducers({
    currentTodo: currentTodoReducer,
    list: listReducer,
});
