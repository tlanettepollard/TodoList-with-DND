import React from 'react';
import Header from './components/Header';
import ThemeProvider from './components/contexts/ThemeProvider';
import './scss/main.scss';


function App() {

  return (
    <ThemeProvider>
      <div className='wrapper'>
        <main className='main'>
          <Header />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
