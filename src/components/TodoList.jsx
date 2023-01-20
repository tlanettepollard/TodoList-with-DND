import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	const [tasks, setTasks] = useState(props.tasks);

	const taskList = tasks.map((task) => (
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
};

export default TodoList;
