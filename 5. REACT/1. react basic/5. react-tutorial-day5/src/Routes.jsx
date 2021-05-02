import React from "react";
import { Link, NavLink } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <p>Using Anchor Tag(with reload)</p>
      <a href="/home" style={{ margin: "20px" }}>
        Home Page
      </a>
      <a href="/about" style={{ margin: "20px" }}>
        About Page
      </a>
      <a href="/services" style={{ margin: "20px" }}>
        Service Page
      </a>
      <a href="/contact" style={{ margin: "20px" }}>
        Contact Page
      </a>
      <a href="/contact/Name" style={{ margin: "20px" }}>
        Contact Name Page
      </a>
      <a href="/xbybsw" style={{ margin: "20px" }}>
        404 Error Page
      </a>

      <br />
      <br />
      <p>Using NavLink Tag(without reload)</p>
      <NavLink
        activeClassName="active-class"
        to="/home"
        exact
        style={{ margin: "20px" }}
      >
        Home Page
      </NavLink>
      <NavLink
        activeClassName="active-class"
        to="/about"
        exact
        style={{ margin: "20px" }}
      >
        About Page
      </NavLink>
      <NavLink
        activeClassName="active-class"
        to="/services"
        exact
        style={{ margin: "20px" }}
      >
        Service Page
      </NavLink>
      <NavLink
        activeClassName="active-class"
        to="/contact"
        exact
        style={{ margin: "20px" }}
      >
        Contact Page
      </NavLink>
      <NavLink
        activeClassName="active-class"
        to="/contact/Name"
        exact
        style={{ margin: "20px" }}
      >
        Contact Name Page
      </NavLink>
      <NavLink
        activeClassName="active-class"
        to="/xbybsw"
        exact
        style={{ margin: "20px" }}
      >
        404 Error Page
      </NavLink>

      <br />
      <br />
      <p>Using Link Tag(without reload)</p>
      <Link to="/home" style={{ margin: "20px" }}>
        Home Page
      </Link>
      <Link to="/about" style={{ margin: "20px" }}>
        About Page
      </Link>
      <Link to="/services" style={{ margin: "20px" }}>
        Service Page
      </Link>
      <Link to="/contact" style={{ margin: "20px" }}>
        Contact Page
      </Link>
      <Link to="/contact/Name" style={{ margin: "20px" }}>
        Contact Name Page
      </Link>
      <Link to="/xbybsw" style={{ margin: "20px" }}>
        404 Error Page
      </Link>
    </>
  );
};

export default Routes;
