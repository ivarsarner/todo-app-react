import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v4';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  const addTodo = (title, desc) => {
    const newTodo = { id: uuid(), title, desc, done: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodos = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const toggleDone = (id) => {
    const toggledTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(toggledTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, todosActions: { addTodo, removeTodos, toggleDone } }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
