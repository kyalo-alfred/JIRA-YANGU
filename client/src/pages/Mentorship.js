import React, { useState } from 'react';

const tabList = [
  { id: 'mentors', label: 'Find Mentors' },
  { id: 'reports', label: 'Progress Reports' },
];

function Mentorship() {
  const [activeTab, setActiveTab] = useState('mentors');

  return (
    <div className="mentorship-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Mentorship + Reports</h1>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="nav-tabs">
        <div className="container">
          <div className="tabs">
            {tabList.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Mentors Tab */}
          {activeTab === 'mentors' && (
            <section id="mentors" className="tab-content active">
              <div className="mentors-list">
                {/* Example mentor cards, can be mapped from data */}
                <div className="mentor-card">
                  <div className="mentor-info">
                    <div className="mentor-avatar">👩‍💻</div>
                    <div className="mentor-details">
                      <div className="mentor-header">
                        <div>
                          <h3>Sarah Johnson</h3>
                          <p className="title">Senior Software Engineer</p>
                          <p className="company">Google</p>
                        </div>
                        <span className="availability available">Available</span>
                      </div>
                      <div className="mentor-rating">
                        <span>⭐ 4.9</span>
                        <span>(127 reviews)</span>
                        <span>89 sessions</span>
                      </div>
                      <div className="expertise">
                        <span className="skill">React</span>
                        <span className="skill">Node.js</span>
                        <span className="skill">System Design</span>
                      </div>
                      <p className="bio">Experienced software engineer specializing in full-stack development and mentoring junior developers.</p>
                      <div className="mentor-actions">
                        <span className="rate">KSh 2,500/hour</span>
                        <div className="actions">
                          <button className="btn-outline">View Profile</button>
                          <button className="btn-primary">Book Session</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mentor-card">
                  <div className="mentor-info">
                    <div className="mentor-avatar">👨‍💼</div>
                    <div className="mentor-details">
                      <div className="mentor-header">
                        <div>
                          <h3>Michael Chen</h3>
                          <p className="title">Product Manager</p>
                          <p className="company">Microsoft</p>
                        </div>
                        <span className="availability busy">Busy</span>
                      </div>
                      <div className="mentor-rating">
                        <span>⭐ 4.8</span>
                        <span>(94 reviews)</span>
                        <span>156 sessions</span>
                      </div>
                      <div className="expertise">
                        <span className="skill">Product Strategy</span>
                        <span className="skill">User Research</span>
                        <span className="skill">Agile</span>
                      </div>
                      <p className="bio">Product management expert with a track record of launching successful digital products.</p>
                      <div className="mentor-actions">
                        <span className="rate">KSh 3,000/hour</span>
                        <div className="actions">
                          <button className="btn-outline">View Profile</button>
                          <button className="btn-primary" disabled>Book Session</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mentor-card">
                  <div className="mentor-info">
                    <div className="mentor-avatar">👩‍🎨</div>
                    <div className="mentor-details">
                      <div className="mentor-header">
                        <div>
                          <h3>Emily Rodriguez</h3>
                          <p className="title">UX Design Lead</p>
                          <p className="company">Meta</p>
                        </div>
                        <span className="availability available">Available</span>
                      </div>
                      <div className="mentor-rating">
                        <span>⭐ 4.9</span>
                        <span>(203 reviews)</span>
                        <span>234 sessions</span>
                      </div>
                      <div className="expertise">
                        <span className="skill">UI/UX Design</span>
                        <span className="skill">Design Systems</span>
                        <span className="skill">User Research</span>
                      </div>
                      <p className="bio">Design leader with expertise in creating user-centered digital experiences.</p>
                      <div className="mentor-actions">
                        <span className="rate">KSh 2,800/hour</span>
                        <div className="actions">
                          <button className="btn-outline">View Profile</button>
                          <button className="btn-primary">Book Session</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <section id="reports" className="tab-content active">
              <div className="reports-dashboard">
                {/* Stats Cards */}
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-info">
                        <p className="stat-label">Total Sessions</p>
                        <p className="stat-value">45</p>
                      </div>
                      <div className="stat-icon">📅</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-info">
                        <p className="stat-label">Goals Completed</p>
                        <p className="stat-value">12</p>
                      </div>
                      <div className="stat-icon">📈</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-info">
                        <p className="stat-label">Average Rating</p>
                        <p className="stat-value">4.7</p>
                      </div>
                      <div className="stat-icon">⭐</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-content">
                      <div className="stat-info">
                        <p className="stat-label">Skills Improved</p>
                        <p className="stat-value">8</p>
                      </div>
                      <div className="stat-icon">📊</div>
                    </div>
                  </div>
                </div>
                {/* Charts and Activity */}
                <div className="reports-grid">
                  <div className="chart-card">
                    <h3>Monthly Progress</h3>
                    <div className="chart-placeholder">
                      <div className="chart-icon">📊</div>
                      <p>Progress Chart</p>
                      <small>Sessions and goals over time</small>
                    </div>
                  </div>
                  <div className="activity-card">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                      <div className="activity-item">
                        <span className="activity-icon">📅</span>
                        <div className="activity-info">
                          <p>Session with Sarah Johnson</p>
                          <small>2 hours ago</small>
                        </div>
                      </div>
                      {/* More activity items can be added here */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Mentorship; 