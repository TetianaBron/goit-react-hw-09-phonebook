import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import { CSSTransition } from 'react-transition-group';
import authSelectors from '../redux/auth/auth-selectors';
import Notification from '../components/Notification/Notification';
import Spinner from '../components/Spinner/Spinner';

export default function RegisterPage () {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(authSelectors.getError);
  const isLoadingAuth = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:  console.warn(`Тип поля name - ${name} не обрабатывается!`);
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword(''); 
  };

    return (
      <div>
            <CSSTransition
             in={true}
             appear={true}
             timeout={500}
             classNames="Title-SlideIn"
             unmountOnExit
             >
             <h1 className="Title">Enter your data</h1>
         </CSSTransition>

         <Notification
            message={error}
        />
        
        {isLoadingAuth && <Spinner />}

        <form
          onSubmit={handleSubmit}
          className="Form"
          autoComplete="off"
        >
          <label
            htmlFor="name"
            className="Label">
            Name</label>
          <input
            className="Input"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />

          <label
            htmlFor="email"
            className="Label">
            Email</label>
          <input
            className="Input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            />
          

          <label
            htmlFor="password"
            className="Label">
            Password</label>
            <input
              className="Input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          

          <button
            className="Button"
            type="submit">Sign up</button>
        </form>
      </div>
    );
  }

RegisterPage.propTypes = {
     error: PropTypes.string,
     isLoadingAuth: PropTypes.bool,
  };

