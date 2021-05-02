import React, { useState } from "react";

const App = () => {
  let [Name, setName] = useState("Hello Shiva");

  const textChange = () => {
    setName("hello Mahadev");
  };
  const textDoubleChange = () => {
    setName("hello bholenath");
  };
  return (
    <>
      <div className="demo">
        <h1>{Name}</h1>
        <br />
        <button
          className="btn"
          onClick={textChange}
          onDoubleClick={textDoubleChange}
        >
          CLick me
        </button>
      </div>
    </>
  );
};
export default App;
