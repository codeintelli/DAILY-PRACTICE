import React from "react";
import { FirstName, LastName } from "./tut52";
const App = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <>
                      <h1>
                        Hello My Name Is {fname} {lname}
                      </h1>
                    </>
                  );
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default App;
