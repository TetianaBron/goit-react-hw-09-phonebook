import { createAction } from '@reduxjs/toolkit';

const registerSuccess = createAction('auth/registerSuccess');
const registerRequest = createAction('auth/registerRequest');
const registerError = createAction('auth/registerError');

const loginSuccess = createAction('auth/loginSuccess');
const loginRequest = createAction('auth/loginRequest');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');


const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const clearError = createAction('auth/clearError');

const authActions = {
    registerSuccess,
    registerRequest,
    registerError,
    loginSuccess,
    loginRequest,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
    clearError
};

export default authActions;