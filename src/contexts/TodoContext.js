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

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleDone = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		console.log(todo);
		console.log(todos);
		//setTodos();
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContext.Provider
			value={{ todos, todosActions: { addTodo, removeTodo, toggleDone } }}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
