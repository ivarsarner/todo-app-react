import React, { useState, useContext, useRef, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const { todosActions } = useContext(TodoContext);

  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    todosActions.addTodo(title, desc);
    setTitle('');
    setDesc('');
  };

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        className="todo-form__title-input input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="todo-form__desc-input input"
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        className="todo-form__submit-btn button"
        type="submit"
        value="Add new todo"
      />
    </form>
  );
};

export default TodoForm;
