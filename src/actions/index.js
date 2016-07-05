import * as database from '../database';

export const addTodo = (key, text) => ({
  type: 'ADD_TODO',
  response: {
    key,
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const fetchTodos = () => (dispatch) => {
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
  });

  return database.fetchTodos().then(
    snapshot => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        response: snapshot,
      });
    }
  );
};
