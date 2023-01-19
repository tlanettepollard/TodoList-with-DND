import React, { useState } from 'react';

export default function Form(props) {
	const [name, setName] = useState('');

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.addTask(name);
		setName('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='input-wrapper'>
				<button
					aria-label='Add new todo'
					type='submit'
					className='input-check'></button>
				<input
					aria-label='Add new todo'
					type='text'
					id='todoInput'
					className='todo-input'
					name='todo-input'
					placeholder='Create a new todo...'
					autoComplete='off'
					value={name}
					onChange={handleChange}
				/>
				<button type='submit' id='submitNewTodo' className='visually-hidden'>
					Add
				</button>
			</div>
		</form>
	);
}
