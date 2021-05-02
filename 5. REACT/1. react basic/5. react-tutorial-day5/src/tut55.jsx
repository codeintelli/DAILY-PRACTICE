import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `You Have Clicked Me ${num} times`;
  });
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
    </>
  );
};

export default App;
