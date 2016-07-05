import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div className="todo">
      <input type="text" placeholder="Enter todo" />
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
