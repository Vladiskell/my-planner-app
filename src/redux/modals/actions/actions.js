import * as types from '../actionTypes/actionTypes';

export const modalsOpenAction = () => ({
    type: types.MODALS_OPEN,
    payload: {
        open: true,
    },
});

export const modalsCloseAction = () => ({
    type: types.MODALS_CLOSE,
    payload: {
        open: false,
    },
});
