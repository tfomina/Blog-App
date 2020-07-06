import React from "react";
import { Link, NavLink } from "react-router-dom";

export const TopBar: React.FC = () => {
  return (
    <nav className="navbar navbar-light bg-success">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="nav navbar pull-xs-right">
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
