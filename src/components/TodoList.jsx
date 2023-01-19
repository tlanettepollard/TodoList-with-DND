import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
	const taskList = props.tasks.map((task) => (
		<TodoItem
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
		/>
	));

	return (
		<ul className='taskList' aria-labelledby='list-heading'>
			{taskList}
		</ul>
	);
}
