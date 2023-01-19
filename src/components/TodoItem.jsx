import React, { useState } from 'react';
import crossIcon from '../images/icon-cross.svg';
import editIcon from '../images/icons8-edit.svg';


export default function TodoItem(props) {
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState('');

	// Set new task name
	function handleChange(e) {
		setNewName(e.target.value);
	}

	// Handle submit on new edited todo
	function handleSubmit(e) {
		e.preventDefault();
		props.editTask(props.id, newName);
		setNewName('');
		setEditing(false);
	}

	const editingTemplate = (
		<form className='edit-form' onSubmit={handleSubmit}>
			<div className='form-group'>
				<label className='todo-label' htmlFor={props.id}>
					New name for {props.name}
				</label>
				<input
					id={props.id}
					className='todo-text'
					index={props.index}
					type='text'
					value={newName}
					onChange={handleChange}
				/>
			</div>
			<div className='btn-group'>
				<button
					type='button'
					className='btn todo-cancel'
					onClick={() => setEditing(false)}>
					Cancel <span className='visually-hidden'>renaming {props.name}</span>
				</button>
				<button type='submit' className='btn todo-edit'>
					Save{' '}
					<span className='visually-hidden'>new name for {props.name}</span>
				</button>
			</div>
		</form>
	);

	const viewTemplate = (
		<div className='view-form'>
			<div className='todo-view'>
				<div className='item-wrapper'>
					<input
						id={props.id}
						index={props.index}
						className='item-checkbox pointer'
						type='checkbox'
						defaultChecked={props.completed}
						onChange={() => props.toggleTaskCompleted(props.id)}
					/>
					<label className='pointer' htmlFor={props.id}>
						{props.name}
					</label>
				</div>
			</div>
			<div className='btn-group'>
				<button
					type='button'
					className='btn edit-icon pointer'
					onClick={() => setEditing(true)}>
					<img src={editIcon} alt='icon-edit' />
					<span className='visually-hidden'>{props.name}</span>
				</button>
				<button
					type='button'
					className='btn delete-icon pointer'
					onClick={() => props.deleteTask(props.id)}>
					<img src={crossIcon} alt='icon-cross' />{' '}
					<span className='visually-hidden'>{props.name}</span>
				</button>
			</div>
		</div>
	);

	return (
		<li
			className='todo-item pointer'>
			{isEditing ? editingTemplate : viewTemplate}
		</li>
	);
}
