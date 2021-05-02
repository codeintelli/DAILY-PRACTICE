import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const actualsize = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log(window.screen.width);
    window.addEventListener("resize", actualsize);
    return () => {
      window.removeEventListener("resize", actualsize); 
    };
  });
  //   const actualsize;
  return (
    <div>
      <h1 className="h1style" style={{ textAlign: "center" }}>
        The Size of the screen is
      </h1>
      <p style={{ fontSize: "2rem", color: "white" }}>{widthCount}</p>
    </div>
  );
};

export default CleanUp;
