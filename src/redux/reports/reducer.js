import { createReducer } from '@reduxjs/toolkit';
import { ADD_REPORT, DELETE_REPORT, SET_REPORTS } from './actions';

const reportReducer = createReducer([], {
    [SET_REPORTS.SUCCESS]: (state, action) => [...action.payload.reports].sort((a, b) => (a.date > b.date ? 1 : -1)),
    [ADD_REPORT.SUCCESS]: (state, action) => [...state, action.payload.report],
    [DELETE_REPORT.SUCCESS]: (state, action) => state.filter((item) => item.id !== action.payload.id),
});

export default reportReducer;
