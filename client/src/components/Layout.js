// Import React library
import React from 'react';
// Import the Header and Footer components for consistent page layout
import Header from './Header';
import Footer from './Footer';

// Layout component: Wraps page content with a header and footer
// 'children' represents the main content of each page
function Layout({ children }) {
  return (
    <>
      {/* Render the site header at the top */}
      <Header />
      {/* Main content area for each page */}
      <main>{children}</main>
      {/* Render the site footer at the bottom */}
      <Footer />
    </>
  );
}

export default Layout; 