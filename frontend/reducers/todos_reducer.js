import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import {merge} from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach((todo) => {nextState[todo.id] = todo;});
      return nextState;
    case RECEIVE_TODO:
      nextState = merge({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    // case REMOVE_TODO:
    // case TODO_ERROR:
    default:
      return state;

  }
};


export default todosReducer;
