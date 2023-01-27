import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/gorestapi">GorestApi App</Link>
          </li>
          <li>
            <Link to="/adminproject">Admin Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
