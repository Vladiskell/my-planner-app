import { createReducer } from '@reduxjs/toolkit';
import { SET_CATEGORY, setCategoryAction } from './actions';

export const categoryReducer = createReducer('', {
    [SET_CATEGORY.TRIGGER]: (state, action) => action.payload.category,
});

export default categoryReducer;
