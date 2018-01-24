import * as TodoAPI from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};


export const fetchTodos = () => ((dispatch) => {
  TodoAPI.fetchTodos().then((serverTodos) => {
    dispatch(receiveTodos(serverTodos));
  });
});


export const createTodo = (todo) => ((dispatch) => {
  TodoAPI.createTodo(todo)
    .then((serverTodo) => {
    dispatch(receiveTodo(serverTodo));
  });
});
