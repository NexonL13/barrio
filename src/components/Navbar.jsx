import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CgProfile, CgSearch } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5"
import Dropdown from "./Dropdown";

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
        <li className="navbar_searchbox">
          <input type="text" className="search_box" placeholder="Search for equipments" />
          <CgSearch className="nav-search"/>
        </li>
        <li className="navbar_list">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li className="navbar_list nav-signin">
          <NavLink to="/signin">Sign-in</NavLink>
        </li>
        <Dropdown />
      </ul>
    </nav>
  );
};

export default Navbar;
