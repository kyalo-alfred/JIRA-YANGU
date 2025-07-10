// Import React and hooks for state management
import React, { useState } from 'react';

// JobBoard component: Main page for job search with geolocation features
function JobBoard() {
  // State to store location status message
  const [locationStatus, setLocationStatus] = useState('');

  // Function to get user's current location using browser geolocation API
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success callback: format coordinates and update status
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setLocationStatus(`📍 Location detected: ${lat}, ${lng}`);
        },
        (error) => {
          // Error callback: show error message
          setLocationStatus('❌ Unable to get location');
        }
      );
    } else {
      // Browser doesn't support geolocation
      setLocationStatus('❌ Geolocation not supported');
    }
  };

  return (
    <div className="jobboard-container">
      {/* Header section */}
      <header className="header">
        <div className="container">
          <h1>Job Board + Geo-Location</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Search Section with filters and location */}
          <section className="search-section">
            <div className="search-form">
              <div className="search-row">
                {/* Job search input */}
                <div className="search-input">
                  <input type="text" placeholder="Search jobs..." id="jobSearch" />
                </div>
                {/* Category filter dropdown */}
                <div className="filter-select">
                  <select id="categoryFilter">
                    <option value="all">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                </div>
                {/* Location button to get user's coordinates */}
                <button className="location-btn" type="button" onClick={getLocation}>📍 Get Location</button>
                <button className="search-btn" type="button">Search Jobs</button>
              </div>
              {/* Display location status message */}
              <div className="location-status" id="locationStatus">{locationStatus}</div>
            </div>
          </section>

          {/* Map Section: Interactive job locations map */}
          <section className="map-section">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>Interactive Job Locations Map</p>
                <small>Showing jobs in your area</small>
              </div>
            </div>
          </section>

          {/* Jobs Grid: List of available job positions */}
          <section className="jobs-section">
            <h2>Available Jobs</h2>
            <div className="jobs-grid">
              {/* Example job cards, can be mapped from data */}
              <div className="job-card">
                <div className="job-header">
                  <h3>Frontend Developer</h3>
                  <span className="job-type">Full-time</span>
                </div>
                <p className="company">🏢 Tech Solutions Ltd</p>
                <div className="job-details">
                  <span className="location">📍 Nairobi, Kenya</span>
                  <span className="salary">💰 KSh 80,000 - 120,000</span>
                  <span className="distance">📏 2.5 km away</span>
                  <span className="posted">⏰ 2 days ago</span>
                </div>
                <div className="job-actions">
                  <button className="btn-outline">View Details</button>
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
              <div className="job-card">
                <div className="job-header">
                  <h3>Marketing Manager</h3>
                  <span className="job-type">Full-time</span>
                </div>
                <p className="company">🏢 Creative Agency</p>
                <div className="job-details">
                  <span className="location">📍 Mombasa, Kenya</span>
                  <span className="salary">💰 KSh 60,000 - 90,000</span>
                  <span className="distance">📏 1.2 km away</span>
                  <span className="posted">⏰ 1 day ago</span>
                </div>
                <div className="job-actions">
                  <button className="btn-outline">View Details</button>
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
              <div className="job-card">
                <div className="job-header">
                  <h3>Data Analyst</h3>
                  <span className="job-type">Remote</span>
                </div>
                <p className="company">🏢 Analytics Pro</p>
                <div className="job-details">
                  <span className="location">📍 Kisumu, Kenya</span>
                  <span className="salary">💰 KSh 70,000 - 100,000</span>
                  <span className="distance">📏 5.0 km away</span>
                  <span className="posted">⏰ 3 days ago</span>
                </div>
                <div className="job-actions">
                  <button className="btn-outline">View Details</button>
                  <button className="btn-primary">Apply Now</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default JobBoard; 