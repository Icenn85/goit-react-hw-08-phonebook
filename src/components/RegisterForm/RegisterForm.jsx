import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  authOperations from '../../redux/auth/authOperations';
import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    };
  };

    const handleSubmit = evt => {
      evt.preventDefault();

      if (name === '' || email === '' || password === '') {
        alert('Please fill in all required fields');
        return;
      }

      dispatch(authOperations.register({ name, email, password }));
      reset();
    };

    const reset = () => {
      setName('');
      setEmail('');
      setPassword('');
    };

  return (
    <div>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <Input
            variant="contained"
            type="text"
            name="name"
            placeholder="Ivanov Ivan"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Email
          <Input
            variant="contained"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="name@email.com"
            autoComplete="off"
          />
        </label>

        <label style={styles.label}>
          Password
          <Input
            variant="contained"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="at least 8 symbols"
            autoComplete="off"
          />
        </label>

        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
);
};

 export default RegisterForm;

