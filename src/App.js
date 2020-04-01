import React from 'react';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';
import TodoForm from './components/TodoForm';

function App() {
	return (
		<main className="todo-main-container">
			<header>
				<h1>Amazing todo app</h1>
			</header>
			<TodoContextProvider>
				<TodoForm />
				<TodoList />
			</TodoContextProvider>
		</main>
	);
}

export default App;
