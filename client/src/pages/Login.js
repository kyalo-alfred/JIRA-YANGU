// Import React and hooks for state management
import React, { useState } from 'react';
// Import navigation and link utilities from react-router-dom
import { useNavigate, Link } from 'react-router-dom';
// Import authentication context hook
import { useAuth } from '../components/Auth/AuthContext';

// Login component: Handles user login form and authentication
function Login() {
  const navigate = useNavigate(); // For programmatic navigation
  const { login } = useAuth(); // Get login function from AuthContext
  // State for form fields
  const [form, setForm] = useState({ email: '', password: '' });
  // State for error and success messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // Basic validation
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    // Mock user info (replace with real authentication in production)
    const mockUser = {
      name: 'User',
      email: form.email,
      avatar: '',
    };
    login(mockUser); // Log in the user
    setSuccess(true);
    setTimeout(() => navigate('/'), 1200); // Redirect after success
  };

  return (
    <div className="login-container" style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh', background:'#f8fafc' }}>
      <div className="login-card" style={{ background:'#fff', borderRadius:'10px', boxShadow:'0 2px 16px rgba(26,127,55,0.08)', padding:'2.5rem 2rem', maxWidth:'400px', width:'100%' }}>
        <h2 style={{ color:'#1a7f37', marginBottom:'1.5rem', textAlign:'center' }}>Log In</h2>
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
          {/* Email input field */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          {/* Password input field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{ padding:'0.7rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
          />
          {/* Error and success messages */}
          {error && <div style={{ color:'#b91c1c', fontSize:'0.97rem' }}>{error}</div>}
          {success && <div style={{ color:'#1a7f37', fontSize:'0.97rem' }}>Login successful! Redirecting...</div>}
          {/* Submit button */}
          <button type="submit" style={{ background:'#1a7f37', color:'#fff', border:'none', borderRadius:'4px', padding:'0.7rem', fontWeight:600, cursor:'pointer', marginTop:'0.5rem' }}>
            Log In
          </button>
        </form>
        {/* Link to signup page */}
        <div style={{ marginTop:'1.5rem', textAlign:'center', fontSize:'0.97rem' }}>
          Don&apos;t have an account?{' '}
          <Link to="/signup" style={{ color:'#1a7f37', textDecoration:'underline', fontWeight:600 }}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login; 