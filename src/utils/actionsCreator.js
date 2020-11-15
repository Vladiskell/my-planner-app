import { createAction } from '@reduxjs/toolkit';

const actionsCreator = (string) => ({
    TRIGGER: createAction(string),
    START: createAction(string + '_START'),
    SUCCESS: createAction(string + '_SUCCESS'),
    ERROR: createAction(string + '_ERROR'),
});

export default actionsCreator;
