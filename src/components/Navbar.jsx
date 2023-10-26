import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        Gym App
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
  );
};

export default Navbar;
