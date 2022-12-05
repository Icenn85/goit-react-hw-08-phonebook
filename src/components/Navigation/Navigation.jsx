import React from 'react';
import  { NavLink }  from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import Button from '@mui/material/Button';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <Button>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>
      </Button>

      {isLoggedIn && (
        <Button>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Contacts
          </NavLink>
        </Button>
      )}
    </nav>
  );
};

export default Navigation;