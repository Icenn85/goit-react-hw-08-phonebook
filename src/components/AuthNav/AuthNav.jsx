import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <Button>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Register
        </NavLink>
      </Button>
      <Button>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Log In
        </NavLink>
      </Button>
    </div>
  );
};

export default AuthNav;

