import React from 'react';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

function App() {
	return (
		<TodoContextProvider>
			<main className="todo">
				<TodoList />
			</main>
		</TodoContextProvider>
	);
}

export default App;
