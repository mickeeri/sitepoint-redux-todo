import React from 'react';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
