import React, { createContext } from "react";
import ComB from "./ComB";
let BioData = createContext();
const ComA = () => {
  return (
    <div>
      {/* <h1>Hello From ComA</h1> */}
      {/* in value we can pass function array and much more */}
      <BioData.Provider value={"shiva"}>
        <ComB />
      </BioData.Provider>
    </div>
  );
};

export default ComA;
export { BioData };
