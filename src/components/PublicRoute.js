import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
  component: Component,
  token,
  redirectTo,
  ...routeProps
}) => (
  <Route 
    {...routeProps}
    render={props =>
      token && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  token: authSelectors.getToken(state)
});

export default connect(mapStateToProps)(PublicRoute);