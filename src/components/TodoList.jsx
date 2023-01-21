import React, { useState } from 'react';
import Form from './Form';
import TodoItem from './TodoItem';
import Filter from './Filter';

import { nanoid } from 'nanoid';

const TodoList = (props) => {
	const [tasks, setTasks] = useState(props.tasks);
	const [filter, setFilter] = useState('All');

	const FILTER_MAP = {
		All: () => true,
		Active: (task) => !task.completed,
		Completed: (task) => task.completed,
	};

	const FILTER_NAMES = Object.keys(FILTER_MAP);

	function addTask(name) {
		const newTask = { id: `todo-${nanoid()}`, name, completed: false };
		setTasks([...tasks, newTask]);
	}

	function deleteTask(id) {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
	}

	const filterList = FILTER_NAMES.map((name) => (
		<Filter
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	const taskList = tasks.map((task) => (
		<TodoItem
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
			toggleTaskCompleted={toggleTaskCompleted}
		/>
	));

	const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${tasksNoun} remaining`;

	function toggleTaskCompleted(id) {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	return (
		<>
			<Form addTask={addTask} />
			<div className='todo-list-wrapper'>
				<ul className='taskList' aria-labelledby='list-heading'>
					{taskList}
				</ul>
				<div className='bottom-navbar'>
					<p id='remaining-text' className='remaining-text'>
						{headingText}
					</p>
					{/* Desktop Size Only*/}
					<div className='desktop-size filters'></div>
					<div className='clear-btn-wrapper'>
						<button type='button' className='clear-btn btn'></button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoList;
