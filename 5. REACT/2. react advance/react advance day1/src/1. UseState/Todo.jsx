import React, { useState } from "react";

const Todo = () => {
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
  console.log(myArray);
  const clearArray = () => {
    const a = window.confirm(`are you sure are you want to remove All Data`);
    if (a === true) {
      setmyArray([]);
    }
  };
  const removeElem = (id, name) => {
    const a = window.confirm(
      `are you sure are you want to remove this Name = ${name}`
    );
    if (a === true) {
      const myNewArray = myArray.filter((val) => {
        return val.id !== id;
      });
      setmyArray(myNewArray);
    } else {
    }
  };
  return (
    <>
      <div className="demo">
        {/* <h1 className="h1style">Shiva Mahadev</h1> */}

        {myArray.map((val, i) => {
          return (
            <h1 className="h1style" key={val.id}>
              {i + 1}. Name: {val.name} Age:{val.age}
              <button
                className="btn_Remove"
                onClick={() => removeElem(val.id, val.name)}
              >
                Remove
              </button>
            </h1>
          );
        })}

        <button className="btn" onClick={clearArray}>
          Clear All
        </button>
      </div>
    </>
  );
};
export default Todo;
