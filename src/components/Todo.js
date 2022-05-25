import React from 'react';

function Todo(props) {

  function deleteHandler() {
    alert("Una well done ooo")
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
