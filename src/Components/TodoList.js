import React from 'react';

export const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{todo.desc}</span>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
};
