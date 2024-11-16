import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth.service';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const { login: setAuthToken } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(username, password);
      setAuthToken(token);
      history.push('/chat');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
