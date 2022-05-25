import React from 'react';
import './style.css';

import Todo from './components/Todo';



function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react"/>
      <Todo text="Do a react project" />
      <Todo text="Add react to my portfolio" />
    </div>
  );
}

export default App;
