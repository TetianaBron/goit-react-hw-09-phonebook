import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
      <nav className="nav">
         {isLoggedIn ? (
         <NavLink
           to="/contacts"
           exact
           className="NavLink"
           activeClassName="NavLink--active"
          >
               Phonebook
         </NavLink>
         ) : (
         <NavLink
           to="/"
           exact
           className="NavLink"
           activeClassName="NavLink--active"
         >
               Home
        </NavLink>
         )}
      </nav>
  );
};