import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeProvider from './components/contexts/ThemeProvider';

import '../src/scss/main.scss';

const App = () => {
	return (
		<ThemeProvider>
			<div className='wrapper'>
				<main className='main'>
					<Header />
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
