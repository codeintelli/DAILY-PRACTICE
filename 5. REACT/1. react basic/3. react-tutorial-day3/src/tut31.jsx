import React, { useState } from "react";
import "./hooks.css";

const Challange = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, uptime] = useState(newTime);
  const RefTime = () => {
    newTime = new Date().toLocaleTimeString();
    uptime(newTime);
  };
  setInterval(RefTime, 1000);
  return (
    <>
      <h1>{ctime}</h1>
      {/* <button onClick={RefTime}>Get Time</button> */}
    </>
  );
};
export default Challange;
