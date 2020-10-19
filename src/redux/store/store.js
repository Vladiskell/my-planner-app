import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from '../reducers'

const store = createStore(
    todosReducer,
    composeWithDevTools(applyMiddleware())
);

export default store;
