import React from 'react';
import Item from './todo_list_item.jsx';
import TodoForm from '../todo_list/todo_form';
import {receiveTodo} from '../../actions/todo_actions';


export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, createTodo } = this.props;

    const todosListItems = todos.map((todo, i) => (
      <Item key={todo.id} todo={todo} />
    ));

    return (
      <div>
        <ul className="list">
          {todosListItems}
        </ul>
        <TodoForm createTodo={createTodo}/>
      </div>
    );
  }
}

// const TodoList = ({ todos, receiveTodo}) => {
//   const listItems = todos.map((todo,i) => (
//     <Item key={i} todo={todo}/>
//   ));
//   return (
//     <div>
//     <ul className="list">
//       {listItems}
//     </ul>
//     <TodoForm receiveTodo={receiveTodo}/>
//   </div>
//   );
//
// };

function uniqueId() {
  return new Date().getTime();
}

// export default TodoList;
