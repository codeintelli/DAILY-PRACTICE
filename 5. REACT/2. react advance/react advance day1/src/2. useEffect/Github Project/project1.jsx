import React, { useEffect, useState } from "react";
import "./project1.css";
import Loading from "./Loading.jsx";
import GithubData from "./GithubData";
const Project1 = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      setLoading(false);
      const data = await fetch("https://api.github.com/users");
      const response = await data.json();
      console.log(response);
      setUsers(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* {setTimeout(() => {
        return <GithubData Users={Users} />;
      }, 1000)} */}
      <GithubData Users={Users} />;
    </>
  );
};

export default Project1;
