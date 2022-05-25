import React from 'react';
import './style.css';

import Todo from './components/Todo';

import Afolabi from './Afolabi';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react"/>
      <Todo text="Build a react app"/>
      <Todo text="Update my resume"/>
    </div>
  );
}

export default App;
