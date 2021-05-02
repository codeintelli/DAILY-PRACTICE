import React, { useReducer } from "react";

let initialState = 0;
const reducer = (value, action) => {
  console.log(value, action);
  if (action.type === "INCREMENT") {
    return value + 1;
  } else if (action.type === "DECREMENT") {
    if (value > 0) {
      return value - 1;
    } else {
      alert("maximum limit reached");
    }
  } else if (action.type === "SQUARE") {
    if (value > 0) {
      return value * value;
    } else {
      alert("maximum limit reached");
    }
  }
  return value;
};
const App = () => {
  // it is similar like usestate but it takes 2 arguments
  const [value, setValue] = useReducer(reducer, initialState);
  return (
    <div className="demo">
      <p>{value}</p>
      <button className="btn" onClick={() => setValue({ type: "INCREMENT" })}>
        Inc
      </button>{" "}
      <br />
      <button className="btn" onClick={() => setValue({ type: "DECREMENT" })}>
        Decr
      </button>
      <br />
      <button className="btn" onClick={() => setValue({ type: "SQUARE" })}>
        Square
      </button>
      <br />
    </div>
  );
  //   return <>Hello World</>;
};

export default App;
