import React from 'react';

const css = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#210B61',
  },
};

const HomePage = () => {
  return (
    <div style={css.container}>
      <h1 style={css.title}>
        Welcome to our phonebook
      </h1>
    </div>
  );
};

export default HomePage;
