import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import * as React from 'react';
import Button from '@mui/material/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.selectUser);

    return (
      <div style={styles.container}>
        <span style={styles.name}>Welcome, {name}</span>

        <Button
          variant="contained"
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