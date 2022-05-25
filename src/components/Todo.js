import React from 'react';
import Modal from './Modal';

function Todo(props) {

  function deleteHandler() {
    return <Modal />
  }

  return (
    <div className="card">
      <h2 className="title">{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
