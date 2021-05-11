import React from "react";
import { useHistory } from "react-router";
import { UserContext } from "../App";
// task remove accept and credentials and tell me logout is working or not
const Logout = () => {
  const { state, dispatch } = React.useContext(UserContext);
  const history = useHistory();
  React.useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        history.push("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error();
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>User Logout Successfully</h1>
    </>
  );
};

export default Logout;
