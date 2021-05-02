import React, { useState } from "react";
import "./TodoList.css";
import AddIcon from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";

const App = () => {
  let [count, setCount] = useState(0);
  const Incr = () => {
    setCount(count++);
  };
  const Decr = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert("max limit reached");
    }
  };
  return (
    <>
      <div className="main__div">
        <div className="center__div">
          <h1>{count}</h1>
          <div className="btn_div">
            <button onClick={Incr}>
              <AddIcon />
            </button>
            <button onClick={Decr}>
              <Delete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
