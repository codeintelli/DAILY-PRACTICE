import React from "react";
const Todo = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times-circle"
          onClick={() => {
            props.onSelect(props.id);
          }}
          aria-hidden="true"
        ></i>

        <li>{props.text}</li>
      </div>
    </>
  );
};
export default Todo;
