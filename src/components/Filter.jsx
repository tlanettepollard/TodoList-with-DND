import React from 'react';

const Filter = (props) => {
	return (
		<div className='filter-control'>
			<div className='btn-group'>
				<button
					type='button'
					className='btn toggle-btn pointer'
					aria-pressed={props.isPressed}
					onClick={() => props.setFilter(props.name)}>
					<span className='visually-hidden'>Show </span>
					<span>{props.name}</span>
					<span className='visually-hidden'>tasks</span>
				</button>
			</div>
		</div>
	);
};

export default Filter;
