import React, { useState } from "react";
import "./hooks.css";
const MultipleForm = () => {
  // getter
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.fname,
          email: value,
        };
      }
    });
  };
  const dataSubmited = (e) => {
    e.preventDefault();
    alert("data submited successfully");
  };

  return (
    <>
      {" "}
      <>
        <div>
          <form onSubmit={dataSubmited}>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <br />
            <p>{fullName.email}</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              onChange={inputEvent}
              value={fullName.fname}
              name="fname"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={inputEvent}
              value={fullName.lname}
              name="lname"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={inputEvent}
              value={fullName.email}
              name="email"
            />
            <br />

            <button type="submit">Login 🤝</button>
          </form>
        </div>
      </>
    </>
  );
};

export default MultipleForm;
