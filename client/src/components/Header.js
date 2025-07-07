import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* TODO: Add logo/branding and navigation links */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/courses">Courses</Link> | 
        <Link to="/jobs">Job Board</Link> | 
        <Link to="/marketplace">Marketplace</Link> | 
        <Link to="/mentorship">Mentorship</Link> | 
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header; 