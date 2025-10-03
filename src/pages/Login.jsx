import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (userType === 'admin') {
      setError('Admin login is currently disabled. Please select User option.');
      return;
    }
    
    if (username.trim()) {
      setLoading(true);
      // Use the auth context login method
      login(username.trim());
      
      // Navigate to homepage
      setTimeout(() => {
        navigate('/');
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-logo">
          <div className="login-logo-icon">🍽️</div>
          <h1>Smart Canteen</h1>
        </div>
      </div>
      
      <div className="login-content">
        <div className="login-box">
          <div className="login-options" data-active={userType}>
            <button 
              type="button" 
              className={`option-btn ${userType === 'user' ? 'active' : ''}`}
              onClick={() => {
                setUserType('user');
                setError(''); // Clear any previous error
              }}
            >
              User
            </button>
            <button 
              type="button" 
              className={`option-btn ${userType === 'admin' ? 'active' : ''}`}
              onClick={() => {
                setUserType('admin');
                setError(''); // Clear any previous error
              }}
            >
              Admin
            </button>
          </div>
          
          <form className="login-form" onSubmit={handleLogin}>
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;