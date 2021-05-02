import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <>
      <div className="container" key={todo.key}>
        <div className="card my-3 mx-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.desc}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
