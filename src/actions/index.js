import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: v4(),
    completed: false,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
