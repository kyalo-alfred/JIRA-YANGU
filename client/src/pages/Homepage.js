import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="header-title">
            <h1>JiraYangu</h1>
            <p>Your all-in-one platform for career development and opportunities</p>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-ghost">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Modules</h2>
            <p>Choose from four comprehensive modules designed to accelerate your career growth</p>
          </div>

          {/* Modules Grid */}
          <div className="modules-grid">
            {/* Job Board Module */}
            <div className="module-card">
              <div className="module-header job-board"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon job-board" role="img" aria-label="Job Board">🧭</div>
                  <h3>Job Board + Geo-Location</h3>
                </div>
                <p className="module-description">Find jobs near you with advanced location filtering</p>
                <ul className="module-features">
                  <li>Job cards UI + filters</li>
                  <li>Location access using JS</li>
                  <li>Map display (Leaflet or static)</li>
                  <li>Real-time job matching</li>
                </ul>
                <Link to="/jobs" className="module-link">Explore Module</Link>
              </div>
            </div>

            {/* Courses Module */}
            <div className="module-card">
              <div className="module-header courses"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon courses" role="img" aria-label="Courses">🎓</div>
                  <h3>Courses + CV Builder</h3>
                </div>
                <p className="module-description">Learn new skills and build your professional CV</p>
                <ul className="module-features">
                  <li>Course reader UI</li>
                  <li>Quiz UI</li>
                  <li>Certificate download</li>
                  <li>CV template UI</li>
                </ul>
                <Link to="/courses" className="module-link">Explore Module</Link>
              </div>
            </div>

            {/* Marketplace Module */}
            <div className="module-card">
              <div className="module-header marketplace"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon marketplace" role="img" aria-label="Marketplace">🛒</div>
                  <h3>Marketplace + M-Pesa Escrow</h3>
                </div>
                <p className="module-description">Buy and sell with secure M-Pesa transactions</p>
                <ul className="module-features">
                  <li>Product listing UI</li>
                  <li>Order flow UI</li>
                  <li>M-Pesa popup simulation</li>
                  <li>Delivery code check</li>
                </ul>
                <Link to="/marketplace" className="module-link">Explore Module</Link>
              </div>
            </div>

            {/* Mentorship Module */}
            <div className="module-card">
              <div className="module-header mentorship"></div>
              <div className="module-content">
                <div className="module-title">
                  <div className="module-icon mentorship" role="img" aria-label="Mentorship">🧠</div>
                  <h3>Mentorship + Reports</h3>
                </div>
                <p className="module-description">Connect with mentors and track your progress</p>
                <ul className="module-features">
                  <li>Mentor profile cards UI</li>
                  <li>Booking form UI</li>
                  <li>Report dashboard (charts)</li>
                  <li>Progress tracking</li>
                </ul>
                <Link to="/mentorship" className="module-link">Explore Module</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Consider JiraYangu</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Location">📍</div>
              <h3>Location-Based</h3>
              <p>Find opportunities near you with advanced geo-location features</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Secure">🛡️</div>
              <h3>Secure Transactions</h3>
              <p>M-Pesa integration ensures safe and reliable payments</p>
            </div>
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