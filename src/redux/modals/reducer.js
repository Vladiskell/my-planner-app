import { createReducer } from '@reduxjs/toolkit';
import { CLOSE_MODALS, closeModalsAction, OPEN_MODALS, openModalsAction } from './actions';

const modalsReducer = createReducer(false, {
    [OPEN_MODALS.TRIGGER]: (state, action) => action.payload.open,
    [CLOSE_MODALS.TRIGGER]: (state, action) => action.payload.open,
});

export default modalsReducer;
