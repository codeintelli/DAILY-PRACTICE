import React, { useState } from "react";
import Loginpic from "../images/login.png";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../App";
const Login = () => {
  const { state, dispatch } = React.useContext(UserContext);
  const history = useHistory();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleLoginInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const InsertData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(res.status);
    if (res.status === 422 || !data) {
      window.alert("Invalid Data");
      history.push("/login");
    } else {
      dispatch({ type: "USER", payload: true });
      console.log("Registration Successful");
      alert("Login successfully");
      // after registration success this will redirect to login page
      history.push("/");
    }
  };
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={Loginpic} alt="signin" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">
                Don't have Account?
              </NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleLoginInput}
                    placeholder="Enter Your Email Here"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleLoginInput}
                    placeholder="Enter Your Password Here"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    onClick={InsertData}
                    className="form-submit"
                    value="Log In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
