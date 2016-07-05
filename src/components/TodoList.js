import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as database from '../database';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { addTodo } = this.props;
    database.todosRef.on('child_added', (data) => {
      addTodo(data.key, data.val().text);
    });
  }

  onSubmit(e) {
    const input = e.target;
    const text = input.value;
    const isEnterKey = (e.which === 13);
    const isLongEnough = text.trim();

    if (isEnterKey && isLongEnough) {
      database.addTodo(input.value);
      input.value = '';
    }
  }

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <div className="todo-container">
        <h1>My todo list</h1>
        <input
          type="text"
          placeholder="Enter todo"
          onKeyDown={this.onSubmit}
          className="todo-entry"
        />
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo
              key={todo.get('key')}
              text={todo.get('text')}
              completed={todo.get('completed')}
              onClick={() => toggleTodo(todo.get('key'))}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state,
});

/* eslint-disable no-class-assign */
TodoList = connect(
  mapStateToProps,
  actions
)(TodoList);
/* eslint-enable no-class-assign */

export default TodoList;

