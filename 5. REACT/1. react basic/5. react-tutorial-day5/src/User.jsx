import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Navbar from "./Navbar";

// const User = ({ match }) => {
//   return <>user{match.params.fname}</>;
// };

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <Navbar />
      <h1 style={{ margin: "200px" }}>
        Welcome to {fname} & {lname} <br />
        My Current Location is {location.pathname} to go forward use this button{" "}
        <button onClick={() => history.push("/")}>Home</button>
        {/* <button onClick={() => history.goForward()}>Forward</button> */}
        {location.pathname === "/user/Shiva/Parvati" ? (
          <h1>
            {/* {fname} 💓Weds💝 {lname} */}
            <button onClick={() => history.goBack()}>OK</button>
          </h1>
        ) : null}
        {/* and {fname} 💓Weds💝 {lname} */}
      </h1>
    </>
  );
};
export default User;
