import React, { useState } from 'react';

function JobBoard() {
  const [locationStatus, setLocationStatus] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setLocationStatus(`📍 Location detected: ${lat}, ${lng}`);
        },
        (error) => {
          setLocationStatus('❌ Unable to get location');
        }
      );
    } else {
      setLocationStatus('❌ Geolocation not supported');
    }
  };

  return (
    <div className="jobboard-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Job Board + Geo-Location</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Search Section */}
          <section className="search-section">
            <div className="search-form">
              <div className="search-row">
                <div className="search-input">
                  <input type="text" placeholder="Search jobs..." id="jobSearch" />
                </div>
                <div className="filter-select">
                  <select id="categoryFilter">
                    <option value="all">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                </div>
                <button className="location-btn" type="button" onClick={getLocation}>📍 Get Location</button>
                <button className="search-btn" type="button">Search Jobs</button>
              </div>
              <div className="location-status" id="locationStatus">{locationStatus}</div>
            </div>
          </section>

          {/* Map Section */}
          <section className="map-section">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>Interactive Job Locations Map</p>
                <small>Showing jobs in your area</small>
              </div>
            </div>
          </section>

          {/* Jobs Grid */}
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