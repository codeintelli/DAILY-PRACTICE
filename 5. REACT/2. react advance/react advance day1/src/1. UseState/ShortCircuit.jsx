import React, { useState } from "react";

const ShortCircuit = () => {
  const [demo, setDemo] = useState("");
  return (
    <>
      <div className="demo">
        <h1 className="h1style">{demo || "mahadev"}</h1>
        <h1 className="h1style">
          {demo || (
            <>
              <h1>Hello Shiva</h1>
              <p>Hello Shiva</p>
            </>
          )}
        </h1>
        <h1 className="h1style">{"bholenath" || demo}</h1>
        <h1 className="h1style">{demo && "mahadev"}</h1>
        <h1 className="h1style">Mahadev</h1>
      </div>
    </>
  );
};

export default ShortCircuit;
