import React from "react";
import Todo from "./Todo";
const Todolist = (props) => {
  return (
    <>
      <div className="container my-3">
        <hr />
        <h1 className="">Your Notes</h1>
        <hr />
      </div>
      <div className="container" style={{ minHeight: "50vh" }}>
        {props.todos.length === 0 ? (
          <>
            <div className="container">
              <p className="text-center">Please Add Some Notes </p>
            </div>
          </>
        ) : (
          props.todos.map((todo) => {
            {
              console.log(todo.sno);
              console.log(Math.random());
            }

            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Todolist;
