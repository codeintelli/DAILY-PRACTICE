import React from "react";
import Routes from "./Navbar";
const Services = (props) => {
  return (
    <>
      <Routes />
      <h1>Welcome To {props.name} Page</h1>
    </>
  );
};

export default Services;
