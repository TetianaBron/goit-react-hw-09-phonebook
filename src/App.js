import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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


export default function App() {
     
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);
    
        return (
            <Layout>
                <AppBar />

                <Suspense fallback={<Spinner/>}>
                    <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        restricted
                        redirectTo="/contacts">
                        <HomePage/>
                    </PublicRoute>
                    <PublicRoute
                        path="/register"
                        restricted
                        redirectTo="/contacts">
                        <RegisterPage/>
                    </PublicRoute>
                    <PublicRoute
                        path="/login"
                        restricted
                        redirectTo="/contacts">
                        <LoginPage/> 
                    </PublicRoute>
                    <PrivateRoute
                        path="/contacts"
                        redirectTo="/login">
                        <PhoneBookPage/>
                    </PrivateRoute>
                    </Switch>
                 </Suspense>
            </Layout>
        );
    };

App.propTypes = {
    onGetCurrentUser: PropTypes.func,
};



