import React from 'react';
import ThemeSetter from './ThemeSetter';

const Header = () => {
    
    return (
        <header className='header-container'>
            <h1 className='title'>Todo</h1>
            <ThemeSetter />
        </header>
    )
}

export default Header