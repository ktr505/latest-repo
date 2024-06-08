import React from 'react';
import { Login } from './Login';

const App = () => {
  const handleLogin = (state) => {
    console.log('Login State:', state);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;
