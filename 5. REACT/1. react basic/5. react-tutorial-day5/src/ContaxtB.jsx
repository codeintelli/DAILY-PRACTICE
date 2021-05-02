import React, { useContext } from "react";
// import ConC from "./ContaxtC";
import { FirstName, LastName } from "./tut52";
const App = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        Hello My Name Is {fname} {lname}
      </h1>
    </>
  );
};

export default App;
