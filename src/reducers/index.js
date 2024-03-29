import { List, Map } from 'immutable';

export default (todos = List([]), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(todo => {
        if (todo.get('id') === action.payload) {
          return todo.update('completed', completed => !completed);
        }
        return todo;
      });
    default:
      return todos;
  }
};
