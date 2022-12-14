import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import css from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = evt => {
        const { name, value } = evt.target;
    switch (name) {
        case 'email':
        return setEmail(value);
        case 'password':
        return setPassword(value);
        default:
        return;
    }
    };

    const handleSubmit = evt => {
    evt.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
         reset();
    };
    
    const reset = () => {
        setEmail('');
        setPassword('');
    };

  return (
    <div>
      <h1 className={css.form__title}>Log In Form</h1>
      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Input
            variant="contained"
            placeholder="Enter email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <Input
            variant="contained"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button variant="contained" type="submit" className={css.btn}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm
