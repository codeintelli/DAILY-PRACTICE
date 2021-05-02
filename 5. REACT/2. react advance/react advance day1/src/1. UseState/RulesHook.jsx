/* 
[ + ] 1. Always Write It Inside the component function

[ + ] 2. component name must be in PascalCase(first letter should be uppercase)

[ + ] 3. we can directly import or we can directly write it using React.hookname

[ + ] 4. Dont call hooks inside loops, condition or nested function 

*/
// import React, { useState } from "react";
import React from "react";

const App = () => {
  //   const [myName, setmyName] = useState("Hello Shiva");
  const [myName, setmyName] = React.useState("Hello Shiva");
  return (
    <>
      <div>
        <h1>{myName}</h1>
      </div>
    </>
  );
};

export default App;
