import React from 'react';
import ThemeSetter from './ThemeSetter';

const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<h1 className='title'>Todo</h1>
				<ThemeSetter />
			</div>
		</header>
	);
};

export default Header;
