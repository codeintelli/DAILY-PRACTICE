import React, { useState } from "react";
import singupImg from "../images/signin.png";
import { NavLink, useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  let handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  let submitData = () => {
    alert(
      `name:${user.email} and ${user.password} and ${user.phone} and ${user.work} and ${user.name}`
    );
  };

  let PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    /* 
    ! a common use of json is to exchange data to/from a web server. when sending data to a web server the data has to be string. convert to a javascript object into a string with JSON.strigify()

    if both key and value are same then use object destructureing
    
    */
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data.status);
    if (res.status === 422 || !data) {
      window.alert("Invalid Data");
    } else {
      console.log("Registration Successful");
      alert("registration successfully");
      // after registration success this will redirect to login page
      history.push("/login");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign-up</h2>
              <form
                className="register-form"
                onSubmit={submitData}
                method="POST"
                id="register-form"
              >
                <div className="form-group ">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInput}
                    name="name"
                    id="name"
                    placeholder="Enter Your Name Here"
                  />
                </div>

                <div className="form-group mt-2 ">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Here"
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Mobile Number Here"
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInput}
                    name="work"
                    id="work"
                    placeholder="Enter Your Profession Here"
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password Here"
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-shield-check material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInput}
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Your Password Here"
                  />
                </div>

                <div className="form-group mt-2 form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={singupImg} alt="signup" />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                I am Already Register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
