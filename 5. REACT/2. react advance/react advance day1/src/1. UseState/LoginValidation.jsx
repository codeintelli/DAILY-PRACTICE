import React, { useState } from "react";
const LoginValidation = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [olddata, setnewEntry] = useState([]);
  //   const [password, setPassword] = useState();
  const dataAdded = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { email: email, password: password };
      setnewEntry([...olddata, newEntry]);
      setEmail("");
      setPassword("");
    } else {
    }
  };
  return (
    <>
      <div className="demo">
        <form onSubmit={dataAdded}>
          <div className="login-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
        {olddata.map((val, i) => {
          const { email, password } = val;
          return (
            <>
              <h1 className="h1style" key="i">
                {i + 1}. {"       "}
                {val.email} {"       "} {val.password}
              </h1>
            </>
          );
        })}
      </div>
    </>
  );
};
export default LoginValidation;
