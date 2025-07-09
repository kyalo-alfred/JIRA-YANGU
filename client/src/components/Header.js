import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext';

const navStyle = {
  background: 'linear-gradient(90deg, #1a7f37 60%, #22c55e 100%)',
  color: '#fff',
  padding: '1rem 0',
  boxShadow: '0 2px 12px rgba(26,127,55,0.08)',
  borderRadius: '0 0 18px 18px',
  margin: '0 0 1.5rem 0',
  fontFamily: "'Nunito', Arial, sans-serif"
};
const navLinks = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  alignItems: 'center',
};
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.08rem',
  padding: '0.3rem 0.8rem',
  borderRadius: '6px',
  transition: 'background 0.2s, color 0.2s',
};
const activeLink = {
  background: '#fff',
  color: '#1a7f37',
};
const avatarStyle = {
  width: 32,
  height: 32,
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid #1a7f37',
  marginRight: 8,
};

function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={navStyle}>
      <nav style={navLinks}>
        <Link to="/" style={{ ...linkStyle, ...(location.pathname === '/' ? activeLink : {}) }}>Home</Link>
        <Link to="/jobboard" style={{ ...linkStyle, ...(location.pathname === '/jobboard' ? activeLink : {}) }}>Job Board</Link>
        <Link to="/courses" style={{ ...linkStyle, ...(location.pathname === '/courses' ? activeLink : {}) }}>Courses</Link>
        <Link to="/marketplace" style={{ ...linkStyle, ...(location.pathname === '/marketplace' ? activeLink : {}) }}>Marketplace</Link>
        <Link to="/mentorship" style={{ ...linkStyle, ...(location.pathname === '/mentorship' ? activeLink : {}) }}>Mentorship</Link>
        <Link to="/profile" style={{ ...linkStyle, ...(location.pathname === '/profile' ? activeLink : {}) }}>Profile</Link>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {!user ? (
            <>
              <Link to="/login" style={linkStyle}>Login</Link>
              <Link to="/signup" style={linkStyle}>Sign Up</Link>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img
                src={user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name || 'User') + '&background=22c55e&color=fff'}
                alt="Profile"
                style={avatarStyle}
              />
              <span style={{ color: '#fff', fontWeight: 700 }}>{user.name || 'User'}</span>
              <button className="btn" style={{ padding: '0.3rem 0.8rem', fontSize: '0.98rem', marginLeft: 4 }} onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header; 