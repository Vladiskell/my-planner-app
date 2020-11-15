import { put, takeEvery, all, fork } from 'redux-saga/effects';

import * as API from '../../api';
import {
    GET_TODOS,
    SET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO_TITLE,
    EDIT_TODO_DESCRIPTION,
    SET_TODO_COMPLETED,
    SET_TODO_IMPORTANT,
    SET_TODO_PROCESS,
} from './actions';
import { ADD_REPORT } from '../reports/actions';

// ---------------------------------------------------------------------------------------------------------------------
// workers
function* getTodos(action) {
    try {
        const { category } = action.payload;

        const data = yield API.getTodos(category);
        yield put(SET_TODOS.SUCCESS({ list: data }));
    } catch {
        yield put(SET_TODOS.ERROR());
    }
}

function* addTodo(action) {
    try {
        const { category, title } = action.payload;

        const todo = yield API.postTodo(category, title);
        const report = yield API.postReport(category, title, 'Added');

        yield put(ADD_TODO.SUCCESS({ todo }));
        yield put(ADD_REPORT.SUCCESS({ report }));
    } catch {
        yield put(ADD_TODO.ERROR());
    }
}

function* deleteTodo(action) {
    try {
        const { category, id, title } = action.payload;

        yield API.deleteTodo(category, id);
        const report = yield API.postReport(category, title, 'Deleted');

        yield put(DELETE_TODO.SUCCESS({ id }));
        yield put(ADD_REPORT.SUCCESS({ report }));
    } catch {
        yield put(DELETE_TODO.ERROR());
    }
}

function* editTodoTitle(action) {
    try {
        const { category, id, title } = action.payload;

        yield API.updateTodo(category, id, 'title', title);
        const report = yield API.postReport(category, title, 'Changed');

        yield put(EDIT_TODO_TITLE.SUCCESS({ id, title }));
        yield put(ADD_REPORT.SUCCESS({ report }));
    } catch {
        yield put(EDIT_TODO_TITLE.ERROR());
    }
}

function* editTodoDescription(action) {
    try {
        const { category, id, description } = action.payload;

        yield API.updateTodo(category, id, 'description', description);
        yield put(EDIT_TODO_DESCRIPTION.SUCCESS({ id, description }));
    } catch {
        yield put(EDIT_TODO_DESCRIPTION.ERROR());
    }
}

function* setTodoCompleted(action) {
    try {
        const { category, id, value, title } = action.payload;

        yield API.updateTodo(category, id, 'completed', value);
        yield put(SET_TODO_COMPLETED.SUCCESS({ id }));

        if (value) {
            const report = yield API.postReport(category, title, 'Completed');
            yield put(ADD_REPORT.SUCCESS({ report }));
        }
    } catch {
        yield put(SET_TODO_COMPLETED.ERROR());
    }
}

function* setTodoImportant(action) {
    try {
        const { category, id, value, title } = action.payload;

        yield API.updateTodo(category, id, 'important', value);
        yield put(SET_TODO_IMPORTANT.SUCCESS({ id }));

        if (value) {
            const report = yield API.postReport(category, title, 'Important');
            yield put(ADD_REPORT.SUCCESS({ report }));
        }
    } catch {
        yield put(SET_TODO_IMPORTANT.ERROR());
    }
}

function* setTodoProcess(action) {
    try {
        const { category, id, value, title } = action.payload;

        yield API.updateTodo(category, id, 'process', value);
        yield put(SET_TODO_PROCESS.SUCCESS({ id }));

        if (value) {
            const report = yield API.postReport(category, title, 'In process');
            yield put(ADD_REPORT.SUCCESS({ report }));
        }
    } catch {
        yield put(SET_TODO_PROCESS.ERROR());
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// watchers
function* watchGetTodos() {
    yield takeEvery(GET_TODOS.TRIGGER.type, getTodos);
}

function* watchAddTodo() {
    yield takeEvery(ADD_TODO.TRIGGER.type, addTodo);
}

function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO.TRIGGER.type, deleteTodo);
}

function* watchEditTodoTitle() {
    yield takeEvery(EDIT_TODO_TITLE.TRIGGER.type, editTodoTitle);
}

function* watchEditTodoDescription() {
    yield takeEvery(EDIT_TODO_DESCRIPTION.TRIGGER.type, editTodoDescription);
}

function* watchSetTodoCompleted() {
    yield takeEvery(SET_TODO_COMPLETED.TRIGGER.type, setTodoCompleted);
}

function* watchSetTodoImportant() {
    yield takeEvery(SET_TODO_IMPORTANT.TRIGGER.type, setTodoImportant);
}

function* watchSetTodoProcess() {
    yield takeEvery(SET_TODO_PROCESS.TRIGGER.type, setTodoProcess);
}

export default function* watchTodos() {
    yield all([
        fork(watchGetTodos),
        fork(watchAddTodo),
        fork(watchDeleteTodo),
        fork(watchEditTodoTitle),
        fork(watchEditTodoDescription),
        fork(watchSetTodoCompleted),
        fork(watchSetTodoImportant),
        fork(watchSetTodoProcess),
    ]);
}
