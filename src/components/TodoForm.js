import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import uuid from 'uuid/v4';

const TodoForm = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const { todosActions } = useContext(TodoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		todosActions.addTodo({ id: uuid(), title, desc });
		setTitle('');
		setDesc('');
	};

	return (
		<section className="todo-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Description"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
					required
				/>
				<input type="submit" value="Add new todo" />
			</form>
		</section>
	);
};

export default TodoForm;
