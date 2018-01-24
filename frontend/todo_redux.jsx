import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import {allTodos} from './reducers/selectors';
import {fetchTodos} from './util/todo_api_util';


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={configureStore} />, document.getElementById('root'));

  window.store = configureStore;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;

});
