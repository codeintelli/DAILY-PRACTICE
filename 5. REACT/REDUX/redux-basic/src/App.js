import React from "react";
import "./incrementer.css";
const App = () => {
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using react redux</h4>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement">
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            class="quantity__input"
            value="0"
          />
          <a class="quantity__plus" title="Increment">
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
