import React, { PropTypes } from 'react';

const Todo = (props) => {
  const { text, completed, onClick } = props;
  return (
    <li
      className="todo-item"
      onClick={onClick}
    >
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
  onClick: PropTypes.func.isRequired,
};

export default Todo;
