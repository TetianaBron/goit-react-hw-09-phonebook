import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;