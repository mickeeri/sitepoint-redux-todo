import React from 'react';
import reducer from './reducers';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
