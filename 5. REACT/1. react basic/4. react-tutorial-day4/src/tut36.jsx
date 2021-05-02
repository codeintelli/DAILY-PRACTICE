import React, { useState } from "react";
import "./hooks.css";

const Form = () => {
  // getter
  const [name, getName] = useState("");
  const [lastName, getLastName] = useState("");
  const [Surname, getSurname] = useState("");
  // setter
  const [fullName, setFullName] = useState("");
  const [lastNameNew, setLastName] = useState("");
  const [SurnameNew, setSurname] = useState("");
  const dataSubmited = (e) => {
    e.preventDefault();
    setFullName(name);
    setLastName(lastName);
    setSurname(Surname);
  };

  const inputEvent = (e) => {
    console.log(e.target.value);
    getName(e.target.value);
  };

  const inputEventTwo = (e) => {
    console.log(e.target.value);
    getLastName(e.target.value);
  };

  const inputEventThree = (e) => {
    console.log(e.target.value);
    getSurname(e.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={dataSubmited}>
          <h1>
            Hello {fullName} {lastNameNew} {SurnameNew}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            onChange={inputEvent}
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={inputEventTwo}
            value={lastName}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Surname"
            onChange={inputEventThree}
            value={Surname}
          />
          <br />
          <button type="submit">Login 🤝</button>
        </form>
      </div>
    </>
  );
};

export default Form;
