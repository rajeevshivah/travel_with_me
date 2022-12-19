import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/share/form">Share your experience</NavLink>
      </li>
      <li>
        <NavLink to="/auth">LOGIN or SIGNUP</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Hidden gems</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
