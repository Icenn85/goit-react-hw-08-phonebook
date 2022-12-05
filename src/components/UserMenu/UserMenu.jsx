import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import * as React from 'react';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.selectUser);

    return (
      <div className={css.container}>
        <p className={css.name}>Welcome, {name}</p>

        <Button
          variant="contained"
          className={css.btn}
          size="medium"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log Out
        </Button>
      </div>
    );
}

export default UserMenu;