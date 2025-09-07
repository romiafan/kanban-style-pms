import React from 'react';

const Register = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default Register;
