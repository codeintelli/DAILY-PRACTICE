import React, { useState } from "react";
import "./hooks.css";
const Events = () => {
  const bg = "#fff";
  const name = "click Me";
  const [cBg, newBg] = useState(bg);
  const [cName, newName] = useState(name);
  const singleclick = () => {
    newBg("#9559b6");
    newName("Ouch!! 🐱");
  };
  const doubleClick = () => {
    newBg("#955926");
    newName("Ohh 😡");
  };
  return (
    <>
      <div style={{ backgroundColor: cBg }} onClick={singleclick}>
        <button onClick={singleclick} onDoubleClick={doubleClick}>
          {cName}
        </button>
      </div>
    </>
  );
};

export default Events;
