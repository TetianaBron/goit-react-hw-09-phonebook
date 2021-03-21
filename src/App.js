import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Layout from './components/Layout/Layout';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhoneBookPage = lazy(() => import('./pages/PhoneBookPage'));

class App extends Component {
      static propTypes = {
        onGetCurrentUser: PropTypes.func,
      };
    
    componentDidMount() {
        this.props.onGetCurrentUser();
    }
    render() {
        return (
            <Layout>
                <AppBar />

                <Suspense fallback={<Spinner/>}>
                    <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        restricted
                        redirectTo="/contacts"
                        component={HomePage} />
                    <PublicRoute
                        path="/register"
                        restricted
                        redirectTo="/contacts"
                        component={RegisterPage} />
                    <PublicRoute
                        path="/login"
                        restricted
                        redirectTo="/contacts"
                        component={LoginPage} />
                    <PrivateRoute
                        path="/contacts"
                        redirectTo="/login"
                        component={PhoneBookPage}
                    />
                    </Switch>
                 </Suspense>
            </Layout>
        );
    };
};

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);


