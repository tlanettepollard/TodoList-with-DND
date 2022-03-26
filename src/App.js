import React, { useState } from 'react'; 
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import ThemeProvider from './components/contexts/ThemeProvider';
import { nanoid } from 'nanoid';
import './scss/main.scss';


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);



  function addTask(name) {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }


  return (
    <ThemeProvider>
      <div className='wrapper'>
        <main className='main'>
          <Header />
          <Form addTask={addTask}/>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
