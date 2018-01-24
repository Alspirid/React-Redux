import React from 'react';

const Item = ({todo}) => {
  return(
  <div className="list-item">
    <li>
      <h3>{todo.id} {todo.title}</h3>
      <p>{todo.body}</p>
      <p>{todo.done}</p>
    </li>
  </div>
  );
};

export default Item;
