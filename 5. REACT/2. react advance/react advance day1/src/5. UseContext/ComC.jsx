import React, { useContext } from "react";
import { BioData } from "./ComA";
const ComC = () => {
  const value = useContext(BioData);
  return (
    <div>
      <h1>Hello From {value} </h1>
    </div>
  );
};

export default ComC;
