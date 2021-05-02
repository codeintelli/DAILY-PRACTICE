import React, { useState } from "react";
import "./hooks.css";
const LoginChallange = () => {
  // getter
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
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
          mob: preValue.mob,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          mob: preValue.mob,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.fname,
          email: value,
          mob: preValue.mob,
        };
      } else if (name === "mob") {
        return {
          fname: preValue.fname,
          lname: preValue.fname,
          email: preValue.email,
          mob: value,
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
      
      <>
        <div>
          <form onSubmit={dataSubmited}>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <br />
            <p>{fullName.email}</p>
            <p>{fullName.mob}</p>
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
              placeholder="Enter Your Email"
              onChange={inputEvent}
              value={fullName.email}
              name="email"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              onChange={inputEvent}
              value={fullName.mob}
              name="mob"
            />
            <br />

            <button type="submit">Login 🤝</button>
          </form>
        </div>
      </>
    </>
  );
};

export default LoginChallange;
