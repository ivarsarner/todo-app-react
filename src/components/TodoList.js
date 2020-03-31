import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
	const { todos } = useContext(TodoContext);
	return (
		<section className="todo-list">
			{todos.map((todo) => (
				<div key={todo.id}>
					<p>{todo.title}</p>
					<p>{todo.desc}</p>
				</div>
			))}
		</section>
	);
};

export default TodoList;
