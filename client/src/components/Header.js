// Import React and necessary hooks from react-router-dom
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Import authentication context hook
import { useAuth } from './Auth/AuthContext';

// Inline styles for the navigation bar and its elements
const navStyle = {
  background: 'linear-gradient(90deg, #1a7f37 60%, #22c55e 100%)', // Green gradient background
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
  color: '#1a7f37', // Green text for active link
};
const avatarStyle = {
  width: 32,
  height: 32,
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid #1a7f37',
  marginRight: 8,
};

// Header component: Displays the navigation bar and user authentication controls
function Header() {
  const location = useLocation(); // Get current route location
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext
  const navigate = useNavigate(); // For programmatic navigation

  // Handle user logout and redirect to homepage
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={navStyle}>
      <nav style={navLinks}>
        {/* Navigation links for main pages. Highlight active link. */}
        <Link to="/" style={{ ...linkStyle, ...(location.pathname === '/' ? activeLink : {}) }}>Home</Link>
        <Link to="/jobboard" style={{ ...linkStyle, ...(location.pathname === '/jobboard' ? activeLink : {}) }}>Job Board</Link>
        <Link to="/courses" style={{ ...linkStyle, ...(location.pathname === '/courses' ? activeLink : {}) }}>Courses</Link>
        <Link to="/marketplace" style={{ ...linkStyle, ...(location.pathname === '/marketplace' ? activeLink : {}) }}>Marketplace</Link>
        <Link to="/mentorship" style={{ ...linkStyle, ...(location.pathname === '/mentorship' ? activeLink : {}) }}>Mentorship</Link>
        <Link to="/profile" style={{ ...linkStyle, ...(location.pathname === '/profile' ? activeLink : {}) }}>Profile</Link>
        {/* Authentication section: Show login/signup if not logged in, else show user info and logout */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {!user ? (
            <>
              <Link to="/login" style={linkStyle}>Login</Link>
              <Link to="/signup" style={linkStyle}>Sign Up</Link>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* User avatar: fallback to generated avatar if none uploaded */}
              <img
                src={user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name || 'User') + '&background=22c55e&color=fff'}
                alt="Profile"
                style={avatarStyle}
              />
              {/* Display user name */}
              <span style={{ color: '#fff', fontWeight: 700 }}>{user.name || 'User'}</span>
              {/* Logout button */}
              <button className="btn" style={{ padding: '0.3rem 0.8rem', fontSize: '0.98rem', marginLeft: 4 }} onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header; 