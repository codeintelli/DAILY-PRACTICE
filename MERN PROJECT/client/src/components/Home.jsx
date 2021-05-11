import React, { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const getUserName = async () => {
    try {
      const response = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(`My Home data ` + data.name);
      if (data) {
        setName(data.name);
        setShow(true);
      }
    } catch (error) {
      console.log(`My Home page error ` + error);
    }
  };

  useEffect(() => {
    getUserName();
  }, []);
  return (
    <>
      <div className=" home-page">
        <div className="home-div">
          <p>Welcome</p>
          <h1>{name}</h1>
          <h2 className="text-capitalize">
            {" "}
            {show ? `Happy, to see you back` : `We are the MERN Developer`}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
