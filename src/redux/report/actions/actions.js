import * as types from '../actionTypes/actionTypes';

export const setReportListAction = (reportList) => ({
    type: types.SET_REPORT_LIST,
    payload: { reportList },
});

export const reportAddAction = (todo) => ({
    type: types.REPORT_ADD,
    payload: { todo },
});
