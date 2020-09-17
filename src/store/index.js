import { createSore, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import history from '../routes/history'

const middlewares = [
    thunk,
    routerMiddleware(history)
];

const store = createSore(
    connectRouter(history)(() =>{}),
    applyMiddleware(...middlewares)
);

export default store;