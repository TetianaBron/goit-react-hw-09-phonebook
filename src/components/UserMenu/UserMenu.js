import React from 'react';
import './UserMenu.scss';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/default-avatar.png';
import ButtonMenu from '../../components/button';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="MenuContainer">
    <img src={avatar} alt="" width="32" className="MenuAvatar" />
    <span className="MenuName">Welcome, {name}</span>
{/* My button
    <button className="MenuButton" type="button" onClick={onLogout}>
      Logout
    </button> */}

    {/* Button from Material UI */}
    <ButtonMenu onClick={onLogout} />
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

