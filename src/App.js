import React from 'react';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

function App() {
	return (
		<TodoContextProvider>
			<TodoList />
		</TodoContextProvider>
	);
}

export default App;
