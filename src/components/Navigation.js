import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = ({isAuthenticated}) => (
  <nav className="nav">
    {!isAuthenticated &&
     ( <NavLink
        to="/"
        exact
        className="NavLink"
        activeClassName="NavLink--active"
      >
      Home
    </NavLink>
    )}

    {isAuthenticated && 
    (<NavLink
      to="/contacts"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Phonebook
    </NavLink>
      )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect (mapStateToProps)(Navigation);