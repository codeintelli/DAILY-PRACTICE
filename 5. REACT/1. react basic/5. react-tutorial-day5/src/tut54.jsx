import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    // if (num === 0) {
    //   alert("you have reached your minimum size");
    // }
    alert("You Have Clicked Me");
  }, [num]);
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        You Have Clicked Me {num} times
      </button>
      <button
        style={{ padding: "20px", margin: "30px" }}
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click Me {nums}
      </button>
    </>
  );
};

export default App;
