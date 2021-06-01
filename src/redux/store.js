import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootRecuder from './root-reducer';

const middlewares = [logger];

const store = createStore(rootRecuder, applyMiddleware(...middlewares));

export default store;