import React, { useState } from "react";

const App = () => {
  let [Name, setName] = useState("Hello Shiva");

  const textChange = () => {
    let val = Name;
    // if (val === "Hello Shiva") {
    //   setName("Hello Mahadev");
    // } else {
    //   setName("Hello Shiva");
    // }

    val === "Hello Shiva" ? setName("Hello Mahadev") : setName("Hello Shiva");
  };

  return (
    <>
      <div className="demo">
        <h1>{Name}</h1>
        <br />
        <br />
        <br />
        <button className="btn" onClick={textChange}>
          CLick me
        </button>
      </div>
    </>
  );
};
export default App;
