import { createAction } from '@reduxjs/toolkit';

const actionFabric = (string) => ({
    TRIGGER: createAction(string),
    START: createAction(string + '_START'),
    SUCCESS: createAction(string + '_SUCCESS'),
    ERROR: createAction(string + '_ERROR'),
});

export default actionFabric;
