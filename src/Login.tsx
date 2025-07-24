import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-logo">
          {/* Logo image from public folder */}
          <img src="/logo2.png" alt="Bright Path Logo" style={{ width: 80, height: 60, objectFit: 'contain', marginBottom: -16 }} />
          <h2><span style={{ color: '#0A2B73' }}>BRIGHT</span> <span style={{ color: '#FFD600' }}>PATH</span></h2>
        </div>
        <h1 className="login-title" style={{ fontSize: '1.4rem', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', fontWeight: 600, color: '#0A2B73' }}>Admin Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-input-group">
            <span className="login-icon">📧</span>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="login-input-group">
            <span className="login-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="login-forgot-row">
            <span></span>
            <a href="#" className="login-forgot">Forgot password?</a>
          </div>
          {error && <div style={{ color: 'red', fontSize: '0.95rem', marginBottom: 8 }}>{error}</div>}
          <button type="submit" className="login-btn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 