import React from 'react';
import { render } from 'react-dom';
import TodoList from './components/TodoList';

const dummyTodos = [
  { id: 0, completed: true, text: 'make components' },
  { id: 1, completed: false, text: 'design actions' },
  { id: 2, completed: false, text: 'implement reducer' },
  { id: 3, completed: false, text: 'connect components' },
];

render(
  <TodoList todos={dummyTodos} />,
  document.getElementById('root')
);
