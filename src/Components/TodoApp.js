import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Hacer los challenges',
    done: false
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleAddTodo = (desc) => {
    if (desc.trim().length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false
    };

    dispatch({ type: 'add', payload: newTodo });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  return (
    <div>
      <h1>
        TodoApp: <small>Pendientes: {todos.length}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
