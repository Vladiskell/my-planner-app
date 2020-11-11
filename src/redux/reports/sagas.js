import { put, takeEvery, all, fork } from 'redux-saga/effects';

import * as API from '../../api';

import { SET_CATEGORY } from '../category/types';
import { GET_REPORT } from './types';

import { setReportsAction, deleteReportAction } from './actions';

function* getReports(action) {
    try {
        const { category } = action.payload;

        const data = yield API.getReports(category);
        yield put(setReportsAction(data));
    } catch {
        yield put(setReportsAction([]));
    }
}

function* deleteReport(action) {
    try {
        const { category, id } = action.payload;

        yield API.deleteReport(category, id);
        yield put(deleteReportAction(id));
    } catch (e) {
        console.log('--', 'error');
    }
}

function* watchGetReports() {
    yield takeEvery(SET_CATEGORY, getReports);
}

function* watchDeleteReport() {
    yield takeEvery(GET_REPORT, deleteReport);
}

export default function* watchReports() {
    yield all([fork(watchGetReports), fork(watchDeleteReport)]);
}
