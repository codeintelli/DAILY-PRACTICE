import React from "react";
const Spread = () => {
  const [myObj, setmyObj] = React.useState({
    name: "shiva",
    age: 32,
    degree: "MCA",
  });
  let updateBtn = () => {
    let val = myObj;
    // (val===myObj?:)

    if (myObj.name === "shiva") {
      setmyObj({ ...myObj, name: "sankar" });
    } else {
      setmyObj({ ...myObj, name: "shiva" });
    }
  };
  return (
    <>
      <div className="demo">
        <h1 className="h1style">
          Name: {myObj.name} & Age: {myObj.age} & <br /> Degree: {myObj.degree}
        </h1>
        <button className="btn" onClick={updateBtn}>
          Update
        </button>
      </div>
    </>
  );
};
export default Spread;
