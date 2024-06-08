import React from 'react';

export function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const remember = formData.get('remember') === 'on';

    console.log({ username, password, remember });
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        <label>
          Username:
          <input data-testid="username" name="username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input data-testid="password" name="password" type="password" />
        </label>
      </div>
      <div>
        <label>
          <input data-testid="remember" name="remember" type="checkbox" />
          Remember me
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
