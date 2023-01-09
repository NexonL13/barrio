import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar_brand">Barrio</h1>
      <ul className="navbar_container">
        <li className="navbar_list">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar_list">
          <NavLink to="/equipments">Browse Equipments</NavLink>
        </li>
        <li className="navbar_list nav-signup">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li className="navbar_list nav-signin">
          <NavLink to="/signin">Sign-in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
