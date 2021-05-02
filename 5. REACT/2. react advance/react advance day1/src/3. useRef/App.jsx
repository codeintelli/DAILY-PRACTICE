import React, { useState, useRef } from "react";

const Uncontrolled = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(null);
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("please fill details") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div className="demo">
          <label htmlFor="luckyName">Name</label>
          <input type="text" id="luckyName" ref={luckyName} />
          <br />
          <button className="btn">Submit</button>
          <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
        </div>
      </form>
    </div>
  );
};

export default Uncontrolled;
