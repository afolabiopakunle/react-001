import React from 'react';
import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [isModalOpen, setModalState ] = useState(false); 

  function deleteHandler() {
    setModalState(true)
  }

  return (
    <div className="card">
      <h2 className="title">{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {isModalOpen && <Backdrop />}
      {isModalOpen && <Modal /> }
    </div>
  );
}

export default Todo;
