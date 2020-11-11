import * as types from './types';

export const openModalsAction = () => ({
    type: types.OPEN_MODALS,
    payload: {
        open: true,
    },
});

export const closeModalsAction = () => ({
    type: types.CLOSE_MODALS,
    payload: {
        open: false,
    },
});
