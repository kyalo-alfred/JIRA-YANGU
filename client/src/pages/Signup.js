import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth/AuthContext';

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!form.firstName || !form.lastName || !form.email || !form.confirmEmail || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.email !== form.confirmEmail) {
      setError('Emails do not match.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    // Mock user info
    const mockUser = {
      name: 'User',
      email: form.email,
      avatar: '',
    };
    login(mockUser);
    setSuccess(true);
    setTimeout(() => navigate('/'), 1200);
  };

  return (
    <div className="signup-container" style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh', background:'#f8fafc' }}>
      <div className="signup-card" style={{ background:'#fff', borderRadius:'10px', boxShadow:'0 2px 16px rgba(26,127,55,0.08)', padding:'2.5rem 2rem', maxWidth:'400px', width:'100%' }}>
        <h2 style={{ color:'#1a7f37', marginBottom:'1.5rem', textAlign:'center' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm Email Address"
            value={form.confirmEmail}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 chars)"
            value={form.password}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          {error && <div style={{ color:'#b91c1c', fontSize:'0.97rem' }}>{error}</div>}
          {success && <div style={{ color:'#1a7f37', fontSize:'0.97rem' }}>Signup successful! Redirecting...</div>}
          <button type="submit" style={{ background:'#1a7f37', color:'#fff', border:'none', borderRadius:'4px', padding:'0.7rem', fontWeight:600, cursor:'pointer', marginTop:'0.5rem' }}>
            Sign Up
          </button>
        </form>
        <div style={{ marginTop:'1.5rem', textAlign:'center', fontSize:'0.97rem' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color:'#1a7f37', textDecoration:'underline', fontWeight:600 }}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup; 