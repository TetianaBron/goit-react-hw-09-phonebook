import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
export default function PrivateRoute({
  redirectTo,
  children,
  ...routeProps
}) {
  const token = useSelector(authSelectors.getToken);
  
  return (

    <Route {...routeProps}>
      {token ? (children) : (<Redirect to={redirectTo} />)}
    </Route>
  );
};

