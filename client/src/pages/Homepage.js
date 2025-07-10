// Import React library
import React from 'react';
// Import Link for navigation between routes
import { Link } from 'react-router-dom';
// Import homepage-specific CSS for styling
import '../assets/css/homepage.css';

// Homepage component: Main landing page for the app
function Homepage() {
  return (
    <div className="homepage-container">
      {/* Header Section: Title and subtitle */}
      <header className="header">
        <div className="header-container">
          <div className="header-title">
            <h1>JiraYangu</h1>
            <p>Your all-in-one platform for career development and opportunities</p>
          </div>
          {/* Removed auth-buttons here, now handled in navbar */}
        </div>
      </header>

      {/* Main Content: Overview of modules */}
      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Modules</h2>
            <p>Choose from four comprehensive modules designed to accelerate your career growth</p>
          </div>

          {/* Modules Grid: Four main feature cards */}
          <div className="modules-grid">
            {/* Job Board Module Card */}
            <div className="module-card">
              <div className="module-header job-board"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon job-board" role="img" aria-label="Job Board">🧭</div>
                  <h3>Job Board + Geo-Location</h3>
                </div>
                <p className="module-description">Find jobs near you with advanced location filtering, real-time matching, and map display.</p>
                <Link to="/jobboard" className="module-link">Explore Module</Link>
              </div>
            </div>

            {/* Courses Module Card */}
            <div className="module-card">
              <div className="module-header courses"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon courses" role="img" aria-label="Courses">🎓</div>
                  <h3>Courses + CV Builder</h3>
                </div>
                <p className="module-description">Learn new skills, take quizzes, earn certificates, and build your professional CV.</p>
                <Link to="/courses" className="module-link">Explore Module</Link>
              </div>
            </div>

            {/* Marketplace Module Card */}
            <div className="module-card">
              <div className="module-header marketplace"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon marketplace" role="img" aria-label="Marketplace">🛒</div>
                  <h3>Marketplace + M-Pesa Escrow</h3>
                </div>
                <p className="module-description">Buy and sell with secure M-Pesa transactions, order flow, and delivery tracking.</p>
                <Link to="/marketplace" className="module-link">Explore Module</Link>
              </div>
            </div>

            {/* Mentorship Module Card */}
            <div className="module-card">
              <div className="module-header mentorship"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon mentorship" role="img" aria-label="Mentorship">🧠</div>
                  <h3>Mentorship + Reports</h3>
                </div>
                <p className="module-description">Connect with mentors, book sessions, and track your progress with reports.</p>
                <Link to="/mentorship" className="module-link">Explore Module</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section: Highlights unique selling points */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Consider JiraYangu</h2>
          </div>
          <div className="features-grid">
            {/* Location-Based Feature */}
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Location">📍</div>
              <h3>Location-Based</h3>
              <p>Find opportunities near you with advanced geo-location features</p>
            </div>
            {/* Secure Transactions Feature */}
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Secure">🛡️</div>
              <h3>Secure Transactions</h3>
              <p>M-Pesa integration ensures safe and reliable payments</p>
            </div>
            {/* Expert Mentorship Feature */}
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Mentorship">👥</div>
              <h3>Expert Mentorship</h3>
              <p>Connect with industry professionals for career guidance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage; 