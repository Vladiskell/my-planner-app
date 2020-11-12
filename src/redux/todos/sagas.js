import { put, takeEvery, all, fork } from 'redux-saga/effects';

import * as API from '../../api';
import { ADD_REPORT, addReportAction } from '../reports/actions';
import { addTodoAction, editTodoDescriptionAction, editTodoTitleAction, setTodosAction } from './actions';
import { GET_TODOS, POST_TODO, POST_TODO_DESCRIPTION, POST_TODO_TITLE } from './types';
import { closeModalsAction } from '../modals/actions';

// ---------------------------------------------------------------------------------------------------------------------
// workers
function* getTodos(action) {
    try {
        const { category } = action.payload;

        const data = yield API.getTodos(category);
        yield put(setTodosAction(data));
    } catch {
        yield put(setTodosAction([]));
    }
}

function* postTodo(action) {
    try {
        const { category, value } = action.payload;

        const todoData = yield API.postTodo(category, value).then();
        const report = yield API.postReport(category, value, todoData.id, 'Added').then();

        yield put(addTodoAction(todoData));
        yield put(ADD_REPORT.SUCCESS({ report }));
    } catch {
        console.log('-----', 'error');
    }
}

function* postTodoDescription(action) {
    try {
        const { category, id, description } = action.payload;

        yield API.updateTodo(category, id, 'description', description);
        yield put(editTodoDescriptionAction(id, description));
        yield put(closeModalsAction());
    } catch {
        console.log('-----', 'error');
    }
}

function* postTodoTitle(action) {
    try {
        const { category, id, title } = action.payload;

        yield API.updateTodo(category, id, 'title', title);
        const report = yield API.postReport(category, title, id, 'Changed').then();

        yield put(editTodoTitleAction(id, title));
        yield put(ADD_REPORT.SUCCESS({ report }));
    } catch {
        console.log('-----', 'error');
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// watchers
function* watchGetTodos() {
    yield takeEvery(GET_TODOS, getTodos);
}

function* watchPostTodo() {
    yield takeEvery(POST_TODO, postTodo);
}

function* watchPostTodoDescription() {
    yield takeEvery(POST_TODO_DESCRIPTION, postTodoDescription);
}

function* watchTodoTitle() {
    yield takeEvery(POST_TODO_TITLE, postTodoTitle);
}

export default function* watchTodos() {
    yield all([fork(watchGetTodos), fork(watchPostTodo), fork(watchPostTodoDescription), fork(watchTodoTitle)]);
}
