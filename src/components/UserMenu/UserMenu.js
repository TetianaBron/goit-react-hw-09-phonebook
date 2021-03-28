import React, { useCallback } from 'react';
import './UserMenu.scss';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/default-avatar.png';
import ButtonMenu from '../../components/button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
  <div className="MenuContainer">
    <img src={defaultAvatar} alt="" width="32" className="MenuAvatar" />
    <span className="MenuName">Welcome, {name}</span>
{/* My button
    <button className="MenuButton" type="button" onClick={onLogout}>
      Logout
    </button> */}

    {/* Button from Material UI */}
    <ButtonMenu onClick={onLogOut} />
  </div>
  );
};

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

//  connect(mapStateToProps, mapDispatchToProps)(UserMenu);

