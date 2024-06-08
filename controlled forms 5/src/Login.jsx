import React, { useState } from 'react';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (onLogin) {
      onLogin({ username, password, remember });
    }
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember me
        </label>
      </div>
      <div>
        <button type="submit" disabled={!username || !password}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
