import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
	const { todos, todosActions } = useContext(TodoContext);

	return (
		<section className="todo-list">
			<header>
				<h3>
					Stuff to do: {todos.length} | Stuff done: {todos.length}
				</h3>
			</header>
			{todos.length ? (
				todos.map((todo) => (
					<div
						className="todo-list__todo-card"
						key={todo.id}
						onClick={() => todosActions.completeTodo(todo.id)}
					>
						<div className="todo-title">{todo.title}</div>
						<div className="todo-desc">{todo.desc}</div>
					</div>
				))
			) : (
				<div className="todo-list__todo-card no-todo">
					No todos found, please add a new todo
				</div>
			)}
		</section>
	);
};

export default TodoList;
