import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import Filter from './components/Filter.jsx';
import Footer from './components/Footer';
import ThemeProvider from './components/contexts/ThemeProvider';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { nanoid } from 'nanoid';
import './scss/main.scss';

const FILTER_MAP = {
	All: () => true,
	Active: (task) => !task.completed,
	Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);
	const [filter, setFilter] = useState('All');

	let onDragEnd = (result) => {};

	function toggleTaskCompleted(id) {
		const updatedTasks = tasks.map((task) => {
			// if this task has the same ID as the edited task
			if (id === task.id) {
				// use object spread to make a new object
				// whose `completed` prop has been inverted
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	function deleteTask(id) {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
	}

	function editTask(id, newName) {
		const editedTaskList = tasks.map((task) => {
			// if this task has the same ID as the edited task
			if (id === task.id) {
				//
				return { ...task, name: newName };
			}
			return task;
		});
		setTasks(editedTaskList);
	}

	const taskList = tasks
		.filter(FILTER_MAP[filter])
		.map((task) => (
			<TodoItem
				id={task.id}
				name={task.name}
				completed={task.completed}
				key={task.id}
				toggleTaskCompleted={toggleTaskCompleted}
				deleteTask={deleteTask}
				editTask={editTask}
			/>
		));

	const filterList = FILTER_NAMES.map((name) => (
		<Filter
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	function addTask(name) {
		const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
		setTasks([...tasks, newTask]);
	}

	const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${tasksNoun} remaining`;

	const clearCompletedTasks = () => {
		setTasks(tasks.filter((task) => !task.completed));
		FILTER_MAP('all');
	};

	return (
		<ThemeProvider>
			<div className='wrapper'>
				<main className='main'>
					<Header />
					<Form addTask={addTask} />

					<div className='todo-list-wrapper'>
						<DragDropContext onDragEnd={onDragEnd}>
							<Droppable droppableId={props.id}>
								{(provided) => (
									<ul
										className='todo-list'
										aria-labelledby='list-heading'
										{...provided.droppableProps}
										ref={provided.innerRef}>
										{taskList}
										{provided.placeholder}
									</ul>
								)}
							</Droppable>
						</DragDropContext>
						<div className='bottom-navbar'>
							<p id='remaining-text' className='remaining-text'>
								{headingText}
							</p>

							{/* Desktop Size only */}
							<div className='desktop-size filters'>{filterList}</div>
							<div className='clear-btn-wrapper'>
								<button
									type='button'
									className='clear-btn btn'
									onClick={clearCompletedTasks}>
									Clear Completed
								</button>
							</div>
						</div>
					</div>

					{/* Mobile Size Only */}
					<div className='mobile-size filters'>{filterList}</div>
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
