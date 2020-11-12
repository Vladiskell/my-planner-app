import { createReducer } from '@reduxjs/toolkit';
import { closeModalsAction, openModalsAction } from './actions';

const modalsReducer = createReducer(false, {
    [openModalsAction]: (state, action) => action.payload.open,
    [closeModalsAction]: (state, action) => action.payload.open,
});

export default modalsReducer;
