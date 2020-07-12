import React from "react";
import { Link, NavLink } from "react-router-dom";

export const TopBar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-success px-0">
      <div className="container">
        <Link to="/" className="navbar-brand text-white h1 mb-0">
          Medium
        </Link>
        <ul className="nav navbar">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link text-white"
              activeClassName="font-weight-bold"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className="nav-link text-white"
              activeClassName="font-weight-bold"
            >
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/register"
              className="nav-link text-white"
              activeClassName="font-weight-bold"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
