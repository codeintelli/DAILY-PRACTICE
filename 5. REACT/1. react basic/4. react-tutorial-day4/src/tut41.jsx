import React, { useState } from "react";
import "./TodoList.css";
import Todo from "./TodoList";
const TodoList = () => {
  const [inputlist, setInputList] = useState("");
  const [itemVal, setItemVal] = useState([]);
  let listItems = () => {
    setItemVal((olditem) => {
      return [...olditem, inputlist];
    });
    setInputList("");
  };
  let itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const deleteItem = (id) => {
    console.log(id);
    setItemVal((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main__div">
        <div className="center__div">
          <br />
          <h1>TodoList</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={itemEvent}
            value={inputlist}
          />
          <button onClick={listItems}>+</button>
          <br />

          <ul>
            {itemVal.map((val, i) => {
              return <Todo id={i} key={i} text={val} onSelect={deleteItem} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
