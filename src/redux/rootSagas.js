import { all, fork } from 'redux-saga/effects';

import watchReports from './reports/sagas';
import watchTodos from './todos/sagas';

export default function* rootSagas() {
    yield all([fork(watchTodos), fork(watchReports)]);
}
