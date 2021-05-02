import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="menu">
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
        </NavLink>{" "}
        <NavLink
          activeClassName="active-class"
          to="/user"
          exact
          style={{ margin: "20px" }}
        >
          User Page
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
        <NavLink
          activeClassName="active-class"
          to="/search"
          exact
          style={{ margin: "20px" }}
        >
          Search
        </NavLink>
      </div>
    </>
  );
};
export default Navbar;
