import React, { useState } from "react";
import "./hooks.css";

const Form = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const dataChanged = (e) => {
    setName(e.target.value);
  };
  const dataClick = () => {
    setFullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter Name Here"
          onChange={dataChanged}
        />
        <button onClick={dataClick}>Login 🤝</button>
      </div>
    </>
  );
};

export default Form;
