import React from 'react';

const Login = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Login</h2>
    <form>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
