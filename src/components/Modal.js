import React from 'react';
import {useState} from 'react'

function Modal() {
  const [isModalOpen, setModalState] = useState(true)

  function removeModal() {
    setModalState(false)
  }

  return (
    <div className="modal"> 
      <p>Are you sure?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn" OnClick={removeModal}>Confirm</button>
    </div>
  )
}

export default Modal;