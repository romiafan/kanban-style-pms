import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, saveToken } from '../services/auth';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await login({ username, password });
      saveToken(data.token);
      navigate('/'); // Use navigate for client-side routing
    } catch (err) {
      // Try to get a more specific error message from the response
      const errorMessage = err.response && err.response.data 
        ? (typeof err.response.data === 'string' ? err.response.data : 'Login failed') 
        : err.message || 'Login failed';
      setError(errorMessage);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
          required
        /><br />
        <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
