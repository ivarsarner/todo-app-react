import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Create a react todo app',
			desc: 'maybe a context would be nice',
		},
		{
			id: 2,
			title: 'Watch it burn',
			desc: 'enjoy all teh errors',
		},
	]);

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContext.Provider value={{ todos, todosActions: { addTodo } }}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
