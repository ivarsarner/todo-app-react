import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoCard from './TodoCard';

const TodoList = () => {
  const { todos, todosActions } = useContext(TodoContext);

  return (
    <section className="todo-list">
      <header>
        <h3>
          Stuff to do: {todos.filter((todo) => !todo.done).length} | Stuff done:{' '}
          {todos.filter((todo) => todo.done).length}
        </h3>
      </header>
      <button
        className="todo-list__remove-btn"
        onClick={() => todosActions.removeTodos()}
      >
        Remove completed todos
      </button>
      {todos.length ? (
        todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      ) : (
        <div className="todo-list__no-todo">
          No todos found, please add a new todo
        </div>
      )}
    </section>
  );
};

export default TodoList;
