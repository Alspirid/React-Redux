import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { receiveTodo, receiveTodos } from '../actions/todo_actions';
import {thunk} from '../middleware/thunk.js';

import logger from 'redux-logger';

const configureStore = createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
