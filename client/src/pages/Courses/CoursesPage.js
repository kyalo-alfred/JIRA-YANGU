import React, { useState } from 'react';
import '../../assets/css/courses.css';

const mockCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    instructor: 'Jane Doe',
    description: 'Learn the basics of React, components, and hooks.'
  },
  {
    id: 2,
    title: 'Node.js & Express',
    instructor: 'John Smith',
    description: 'Build scalable backend APIs with Node.js and Express.'
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Emily Lee',
    description: 'Master the principles of user interface and experience design.'
  },
  {
    id: 4,
    title: 'Data Analysis with Python',
    instructor: 'Michael Kim',
    description: 'Analyze and visualize data using Python libraries.'
  }
];

function CoursesPage() {
  const [enrolled, setEnrolled] = useState([]);

  const handleEnroll = (course) => {
    if (!enrolled.find(c => c.id === course.id)) {
      setEnrolled([...enrolled, course]);
    }
  };

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2>Courses</h2>
        <p>Learn new skills and advance your career</p>
      </div>
      <div className="courses-listings">
        {mockCourses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-title">{course.title}</div>
            <div className="course-meta">Instructor: {course.instructor}</div>
            <div className="course-description">{course.description}</div>
            <button
              className="btn"
              onClick={() => handleEnroll(course)}
              disabled={!!enrolled.find(c => c.id === course.id)}
            >
              {enrolled.find(c => c.id === course.id) ? 'Enrolled' : 'Enroll'}
            </button>
          </div>
        ))}
      </div>
      {enrolled.length > 0 && (
        <div className="enrolled-section">
          <h3>Enrolled Courses</h3>
          <ul>
            {enrolled.map(course => (
              <li key={course.id}>{course.title} (Instructor: {course.instructor})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CoursesPage; 