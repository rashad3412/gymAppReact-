import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <Link to="/home" className="site-title">
          Gym App
        </Link>
        <ul>
          <li>
            <Link to="/fitnesspage">Fitness</Link>
            <Link to="/trackerpage">Tracker</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
