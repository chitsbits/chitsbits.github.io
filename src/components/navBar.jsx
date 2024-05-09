import 'bootstrap/dist/css/bootstrap.min.css';
import React, { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
