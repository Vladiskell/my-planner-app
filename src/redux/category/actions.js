import * as types from './types';

export const setCategoryAction = (category) => ({
    type: types.SET_CATEGORY,
    payload: { category },
});
