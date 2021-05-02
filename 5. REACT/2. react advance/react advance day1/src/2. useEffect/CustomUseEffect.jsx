import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);
  useEffect(() => {
    console.log("hello shiva is here");
  }, []);
  return (
    <div>
      <div className="demo">
        <h1 className="countstyle">{count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Count++ 😉
        </button>
      </div>
    </div>
  );
};

export default App;
