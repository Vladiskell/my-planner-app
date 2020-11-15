import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    SET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    SET_CURRENT_TODO,
    EDIT_TODO_TITLE,
    EDIT_TODO_DESCRIPTION,
    SET_TODO_COMPLETED,
    SET_TODO_IMPORTANT,
    SET_TODO_PROCESS,
} from './actions';

const currentTodoReducer = createReducer('', {
    [SET_CURRENT_TODO.TRIGGER]: (state, action) => action.payload.id,
});

const listReducer = createReducer([], {
    [SET_TODOS.SUCCESS]: (state, action) => [...action.payload.list].sort((item) => (item.statuses.completed ? -1 : 1)),
    [ADD_TODO.SUCCESS]: (state, action) => [...state, action.payload.todo],
    [DELETE_TODO.SUCCESS]: (state, action) => state.filter((item) => item.id !== action.payload.id),
    [EDIT_TODO_TITLE.SUCCESS]: (state, action) => {
        state.map((item) => {
            if (item.id === action.payload.id) {
                item.title = action.payload.title;
                return item;
            } else {
                return item;
            }
        });
        return state;
    },
    [EDIT_TODO_DESCRIPTION.SUCCESS]: (state, action) => {
        state.map((item) => {
            if (item.id === action.payload.id) {
                item.title = action.payload.description;
                return item;
            } else {
                return item;
            }
        });
        return state;
    },
    [SET_TODO_COMPLETED.SUCCESS]: (state, action) => {
        state.map((item) => {
            if (item.id === action.payload.id) {
                item.statuses.completed = !item.statuses.completed;
                item.statuses.important = false;
                item.statuses.process = false;
                return item;
            } else {
                return item;
            }
        });
        return state;
    },
    [SET_TODO_IMPORTANT.SUCCESS]: (state, action) => {
        state.map((item) => {
            if (item.id === action.payload.id) {
                item.statuses.completed = false;
                item.statuses.important = !item.statuses.important;
                return item;
            } else {
                return item;
            }
        });
        return state;
    },
    [SET_TODO_PROCESS.SUCCESS]: (state, action) => {
        state.map((item) => {
            if (item.id === action.payload.id) {
                item.statuses.completed = false;
                item.statuses.process = !item.statuses.process;
                return item;
            } else {
                return item;
            }
        });
        return state;
    },
});

export default combineReducers({
    currentTodo: currentTodoReducer,
    list: listReducer,
});
