import { put, takeEvery, all, fork } from 'redux-saga/effects';

import * as API from '../../api';
import { GET_REPORTS, SET_REPORTS, DELETE_REPORT } from './actions';

function* getReports(action) {
    try {
        const { category } = action.payload;

        const data = yield API.getReports(category);
        yield put(SET_REPORTS.SUCCESS({ reports: data }));
    } catch {
        yield put(SET_REPORTS.ERROR());
    }
}

function* deleteReport(action) {
    try {
        const { category, id } = action.payload;

        yield API.deleteReport(category, id);
        yield put(DELETE_REPORT.SUCCESS({ id }));
    } catch (e) {
        yield put(DELETE_REPORT.ERROR());
    }
}

function* watchGetReports() {
    yield takeEvery(GET_REPORTS.TRIGGER.type, getReports);
}

function* watchDeleteReport() {
    yield takeEvery(DELETE_REPORT.TRIGGER.type, deleteReport);
}

export default function* watchReports() {
    yield all([fork(watchGetReports), fork(watchDeleteReport)]);
}
