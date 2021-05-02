import React, { useState } from "react";

const ArrayReact = () => {
  let biodata = [
    {
      id: 1,
      name: "Mahadev",
      age: 22,
    },
    {
      id: 2,
      name: "Shiv",
      age: 22,
    },
    {
      id: 3,
      name: "Dushyant",
      age: 22,
    },
  ];
  const [myArray, setmyArray] = useState(biodata);
  const clearArray = () => {
    console.log("you have clicked");
    setmyArray([]);
    console.log("you have 2 clicked");
  };
  return (
    <>
      <div className="demo">
        {/* <h1 className="h1style">Shiva Mahadev</h1> */}

        {myArray.map((val, i) => {
          return (
            <h1 className="h1style" key={val.id}>
              {i + 1}. Name: {val.name} Age:{val.age}{" "}
            </h1>
          );
        })}

        <button className="btn" onClick={clearArray}>
          Clear
        </button>
      </div>
    </>
  );
};
export default ArrayReact;
