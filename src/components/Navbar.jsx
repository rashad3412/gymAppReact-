import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="site-title">
          GymApp
        </Link>
        <ul>
          <li>
            <Link to="/fitnesspage">Fitness</Link>
          </li>
          <li>
            <Link to="/trackerpage">Tracker</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
