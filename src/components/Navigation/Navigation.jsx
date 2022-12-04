import React from 'react';
import  { NavLink }  from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;