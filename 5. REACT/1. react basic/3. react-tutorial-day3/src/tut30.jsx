import React, { useState } from "react";
import "./hooks.css";

// let count = 1;
// const Incr = () => {
//   count++;
//   console.log("clicked" + count);
// //   document.getElementById("demo").innerHTML = count;
// };

const Hooks = () => {
  const state = useState();
  //   current value ,updated value = initial value
  const [count, setCount] = useState(0);
  const Incr = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Incr}>Click Me</button>
    </>
  );
};

export default Hooks;
