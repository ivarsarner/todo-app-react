import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';

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

	return (
		<TodoContext.Provider value={{ todos }}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
