import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    document.title = `chats (${count})`;
  });

  return (
    <div>
      <div className="demo">
        <h1 className="h1style">{count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Count++ 😉
        </button>
      </div>
    </div>
  );
};

export default App;
