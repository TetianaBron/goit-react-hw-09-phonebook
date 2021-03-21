import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  token,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
     token ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  token: authSelectors.getToken(state)
});

export default connect(mapStateToProps)(PrivateRoute);