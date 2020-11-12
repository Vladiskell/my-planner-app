import { createAction } from '@reduxjs/toolkit';
import actionFabric from '../../utils/actionFabric';

export const openModalsAction = createAction('OPEN_MODALS', () => ({
    payload: { open: true },
}));

export const closeModalsAction = createAction('CLOSE_MODALS', () => ({
    payload: { open: false },
}));

export const OPEN_MODALS = actionFabric('OPEN_MODALS', () => ({
    payload: { open: true },
}));

export const CLOSE_MODALS = actionFabric('CLOSE_MODALS', () => ({
    payload: { open: false },
}));
