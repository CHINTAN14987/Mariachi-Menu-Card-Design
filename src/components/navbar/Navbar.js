import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/menu">Offers</NavLink>
        <NavLink to="/menu">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
