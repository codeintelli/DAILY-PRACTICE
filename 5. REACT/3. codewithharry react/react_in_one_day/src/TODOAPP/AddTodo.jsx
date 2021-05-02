import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title and description must have any value");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      <div className="container my-3">
        <h1>Welcome To Magic Notes</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="form-group">
                <h5 className="card-title">Add a title</h5>
                <input
                  type="text"
                  className="form-control"
                  id="addTitle"
                  value={title}
                  placeholder="Enter title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <h5 className="card-title">Add a note</h5>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="addTxt"
                  rows="3"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </div>

              <button className="btn btn-primary" id="addBtn">
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
