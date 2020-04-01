import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Button from '@material-ui/core/Button';

const TodoList = () => {
	const { todos } = useContext(TodoContext);
	return (
		<main className="todo">
			<section className="todo-addbtn">
				<Button variant="contained" color="primary">
					Add new todo
				</Button>
			</section>
			<section className="todo-list">
				{todos.map((todo) => (
					<div className="todo-list__todo-card" key={todo.id}>
						<p>{todo.title}</p>
						<p>{todo.desc}</p>
					</div>
				))}
			</section>
		</main>
	);
};

export default TodoList;
