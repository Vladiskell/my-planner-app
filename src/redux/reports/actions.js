import * as types from './types';

export const setReportsAction = (reports) => ({
    type: types.SET_REPORTS,
    payload: { reports },
});

export const getReportAction = (id, category) => ({
    type: types.GET_REPORT,
    payload: { id, category },
});

export const addReportAction = (report) => ({
    type: types.ADD_REPORT,
    payload: { report },
});

export const deleteReportAction = (id) => ({
    type: types.DELETE_REPORT,
    payload: { id },
});
