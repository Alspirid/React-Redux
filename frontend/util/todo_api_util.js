export const fetchTodos = () => {
  return $.ajax({
    url: 'api/todos',
    method: 'GET',
    dataType: 'json'
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    url: 'api/todos',
    method: 'POST',
    dataType: 'json',
    data: { todo: todo }
  });
};
