import React, { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<div className="navbar-nav">
					<NavLink className="nav-link" to="/about">
						About
					</NavLink>
					<NavLink className="nav-link" to="/projects">
						Projects
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
