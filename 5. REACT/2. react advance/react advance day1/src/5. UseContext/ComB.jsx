import React from "react";
import ComC from "./ComC";
// const ComB = (name) => {
const ComB = (name) => {
  return (
    <div>
      {/* <h1>Hello From ComB</h1> */}
      <ComC />
      {/* <ComC name={props.name} /> */}
    </div>
  );
};
export default ComB;
