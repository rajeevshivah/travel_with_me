import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">PAHAD</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">BEACH</NavLink>
      </li>
      <li>
        <NavLink to="/auth">JHARNA</NavLink>
      </li>
      <li>
        <NavLink to="/auth">HOSTALS & CAMPS</NavLink>
      </li>
      <li>
        <NavLink to="/auth">TRECK</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
