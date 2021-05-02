import React, { useState } from "react";
import "./hooks.css";

const SpreadLogin = () => {
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
      return {
        ...preValue,
        [name]: value,
      };
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

export default SpreadLogin;
