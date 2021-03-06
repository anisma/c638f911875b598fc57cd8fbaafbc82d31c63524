import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

export const middlewares = [thunk];

//add logger into middleware
if (process.env.NODE_ENV === 'development') {
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
