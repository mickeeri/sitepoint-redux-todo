import React, { PropTypes } from 'react';

const Todo = (props) => {
  const { text, completed } = props;
  return (
    <li className="todo-item">
      {completed ?
        <strike>{text}</strike> :
        <span>{text}</span>
      }
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
