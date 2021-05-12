import React from "react";
import "./incrementer.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, mulNumber, divNumber } from "./action/index";
const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const calState = useSelector((state) => state.calNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using react redux</h4>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement">
            <span onClick={() => dispatch(decNumber())}>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            disabled="disabled"
            readOnly
            className="quantity__input"
            value={myState}
          />
          <a className="quantity__plus" title="Increment">
            <span onClick={() => dispatch(incNumber(5))}>+</span>
          </a>
        </div>
      </div>

      <div className="container">
        <h1>Multiply/Divide counter</h1>
        <h4>using react redux</h4>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement">
            <span onClick={() => dispatch(divNumber())}>/</span>
          </a>
          <input
            name="quantity"
            type="text"
            disabled="disabled"
            readOnly
            className="quantity__input"
            value={calState}
          />
          <a className="quantity__plus" title="Increment">
            <span onClick={() => dispatch(mulNumber())}>*</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
