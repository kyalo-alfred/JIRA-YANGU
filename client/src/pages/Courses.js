import React, { useState } from 'react';

const tabList = [
  { id: 'courses', label: 'Courses' },
  { id: 'reader', label: 'Course Reader' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'cv', label: 'CV Builder' },
];

function Courses() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="courses-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Courses + CV Builder</h1>
          {/* Use Link to homepage if needed */}
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
          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <section id="courses" className="tab-content active">
              <div className="courses-grid">
                {/* Example course cards, can be mapped from data */}
                <div className="course-card">
                  <div className="course-info">
                    <h3>React Development Fundamentals</h3>
                    <p className="instructor">👨‍💻 Jane Doe</p>
                    <div className="course-meta">
                      <span>8 hours</span>
                      <span>⭐ 4.8</span>
                      <span>1,250 students</span>
                    </div>
                    <div className="progress-section">
                      <div className="progress-header">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="course-actions">
                      <button className="btn-outline" onClick={() => setActiveTab('reader')}>Continue Learning</button>
                      <button className="btn-primary">View Course</button>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <div className="course-info">
                    <h3>Digital Marketing Mastery</h3>
                    <p className="instructor">👨‍💼 John Smith</p>
                    <div className="course-meta">
                      <span>12 hours</span>
                      <span>⭐ 4.6</span>
                      <span>890 students</span>
                    </div>
                    <div className="progress-section">
                      <div className="progress-header">
                        <span>Progress</span>
                        <span>30%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div className="course-actions">
                      <button className="btn-outline" onClick={() => setActiveTab('reader')}>Continue Learning</button>
                      <button className="btn-primary">View Course</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Course Reader Tab */}
          {activeTab === 'reader' && (
            <section id="reader" className="tab-content active">
              <div className="reader-layout">
                <div className="video-section">
                  <div className="video-player">
                    <div className="video-placeholder">
                      <div className="play-icon">▶️</div>
                      <p>Video Player</p>
                      <small>Introduction to React Components</small>
                    </div>
                  </div>
                  <div className="lesson-content">
                    <h3>Lesson Overview</h3>
                    <p>In this lesson, you'll learn about React components and how they form the building blocks of React applications. We'll cover:</p>
                    <ul>
                      <li>What are components?</li>
                      <li>Functional vs Class components</li>
                      <li>Props and data flow</li>
                      <li>Component composition</li>
                    </ul>
                  </div>
                </div>
                <div className="course-progress">
                  <h3>Course Progress</h3>
                  <div className="lessons-list">
                    <div className="lesson-item completed">
                      <span className="lesson-icon">✅</span>
                      <div className="lesson-info">
                        <p>Introduction to React</p>
                        <small>45 min</small>
                      </div>
                    </div>
                    <div className="lesson-item completed">
                      <span className="lesson-icon">✅</span>
                      <div className="lesson-info">
                        <p>Components and Props</p>
                        <small>60 min</small>
                      </div>
                    </div>
                    <div className="lesson-item current">
                      <span className="lesson-icon">▶️</span>
                      <div className="lesson-info">
                        <p>State Management</p>
                        <small>75 min</small>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <span className="lesson-icon">⏳</span>
                      <div className="lesson-info">
                        <p>Hooks and Effects</p>
                        <small>90 min</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Quiz Tab */}
          {activeTab === 'quiz' && (
            <section id="quiz" className="tab-content active">
              <div className="quiz-container">
                <h2>🏆 Course Quiz</h2>
                <div className="quiz-questions">
                  <div className="question">
                    <h3>1. What is the virtual DOM in React?</h3>
                    <div className="options">
                      <label><input type="radio" name="q1" value="0" /> A real DOM element</label>
                      <label><input type="radio" name="q1" value="1" /> A JavaScript representation of the DOM</label>
                      <label><input type="radio" name="q1" value="2" /> A CSS framework</label>
                      <label><input type="radio" name="q1" value="3" /> A database</label>
                    </div>
                  </div>
                  <div className="question">
                    <h3>2. Which hook is used for state management in functional components?</h3>
                    <div className="options">
                      <label><input type="radio" name="q2" value="0" /> useEffect</label>
                      <label><input type="radio" name="q2" value="1" /> useState</label>
                      <label><input type="radio" name="q2" value="2" /> useContext</label>
                      <label><input type="radio" name="q2" value="3" /> useReducer</label>
                    </div>
                  </div>
                </div>
                <div className="quiz-actions">
                  <button className="btn-outline">Save Progress</button>
                  <button className="btn-primary">Submit Quiz</button>
                </div>
              </div>
            </section>
          )}

          {/* CV Builder Tab */}
          {activeTab === 'cv' && (
            <section id="cv" className="tab-content active">
              <div className="cv-builder">
                <div className="templates-section">
                  <h2>Choose Your CV Template</h2>
                  <div className="templates-grid">
                    <div className="template-card">
                      <div className="template-preview">
                        <div className="template-placeholder">👤</div>
                      </div>
                      <h3>Professional Template</h3>
                      <p>Corporate</p>
                      <button className="btn-primary">Use Template</button>
                    </div>
                    <div className="template-card">
                      <div className="template-preview">
                        <div className="template-placeholder">🎨</div>
                      </div>
                      <h3>Creative Template</h3>
                      <p>Design</p>
                      <button className="btn-primary">Use Template</button>
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

export default Courses; 