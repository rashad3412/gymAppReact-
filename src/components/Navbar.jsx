import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div>
          <ul className="nav-menu">
            <li>
              <Link to="/fitnesspage">Fitness</Link>
            </li>
            <li>
              <Link to="/trackerpage">Tracker</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
