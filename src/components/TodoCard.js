import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoCard = ({ todo }) => {
  const { todosActions } = useContext(TodoContext);

  return (
    <div
      className={`todo-list__card${todo.done ? '--done' : '--not-done'}`}
      onClick={() => todosActions.toggleDone(todo.id)}
    >
      <div className="todo-list__card__title">{todo.title}</div>
      <div className="todo-list__card__desc">{todo.desc}</div>
    </div>
  );
};

export default TodoCard;
