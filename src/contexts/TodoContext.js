import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
	const [todos, setTodos] = useState(() => {
		const localData = localStorage.getItem('todos');
		return localData ? JSON.parse(localData) : [];
	});

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const completeTodo = (id) => {
		console.log(id);
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContext.Provider
			value={{ todos, todosActions: { addTodo, removeTodo, completeTodo } }}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
