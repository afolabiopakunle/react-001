import React from 'react';
import './style.css';

import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react"/>
      <Todo text="Do a react project" />
      <Todo text="Add react to my portfolio" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
