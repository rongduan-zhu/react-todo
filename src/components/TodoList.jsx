import React from 'react'
import PropTypes from 'prop-types'
import { Todo } from './Todo'

export const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
        {todos.map(todo => {
            return (
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}></Todo>
            );
        })}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
};
