import React from "react";
import ErrorImg from "../images/404.svg";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="container-fluid" id="home">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 hero-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
                <h1>Sorry This Page Is</h1>
                <h1>Not Available</h1>
                <p>
                  404
                  <span className="bold-style"> Error ⛔ Page⛔</span>
                </p>
                <NavLink to="/">
                  <span className="btn btn-outline-primary mt-5"> Back</span>
                </NavLink>
              </div>

              <div className="col-md-6 col-12 hero-text order-md-1 order-0">
                <figure>
                  <img src={ErrorImg} alt="hero-section" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
