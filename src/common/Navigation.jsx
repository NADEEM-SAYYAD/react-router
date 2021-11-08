import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" exact to="/">
                Navbar
            </NavLink>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/features">
                            Features
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navigation;
