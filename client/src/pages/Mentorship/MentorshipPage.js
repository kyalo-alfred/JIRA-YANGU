// Import React and hooks for state management
import React, { useState } from 'react';
// Import CSS for mentorship page styling
import '../../assets/css/mentorship.css';

// Mock mentor data for demonstration
const mockMentors = [
  {
    id: 1,
    name: 'Alice Wanjiku',
    expertise: 'Software Engineering',
    bio: '10+ years in full-stack development and agile coaching.'
  },
  {
    id: 2,
    name: 'Brian Otieno',
    expertise: 'Data Science',
    bio: 'Data scientist specializing in machine learning and analytics.'
  },
  {
    id: 3,
    name: 'Cynthia Mwangi',
    expertise: 'UI/UX Design',
    bio: 'Award-winning designer with a passion for user experience.'
  },
  {
    id: 4,
    name: 'David Kimani',
    expertise: 'Business Strategy',
    bio: 'Business mentor with a focus on startups and growth.'
  }
];

// MentorshipPage component: Display mentors and handle mentorship requests
function MentorshipPage() {
  // State for tracking mentorship requests
  const [requests, setRequests] = useState([]);
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for selected mentor in modal
  const [selectedMentor, setSelectedMentor] = useState(null);
  // State for request message
  const [message, setMessage] = useState('');
  // State for submission status
  const [submitted, setSubmitted] = useState(false);

  // Open modal for requesting mentorship
  const openModal = (mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true);
    setMessage('');
    setSubmitted(false);
  };

  // Close modal and reset state
  const closeModal = () => {
    setShowModal(false);
    setSelectedMentor(null);
  };

  // Handle mentorship request submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([
      ...requests,
      { mentor: selectedMentor, message }
    ]);
    setSubmitted(true);
  };

  return (
    <div className="mentorship-container">
      <div className="mentorship-header">
        <h2>Mentorship</h2>
        <p>Connect with experienced mentors for guidance</p>
      </div>
      {/* Display list of available mentors */}
      <div className="mentors-listings">
        {mockMentors.map(mentor => (
          <div className="mentor-card" key={mentor.id}>
            <div className="mentor-title">{mentor.name}</div>
            <div className="mentor-meta">Expertise: {mentor.expertise}</div>
            <div className="mentor-bio">{mentor.bio}</div>
            <button className="btn" onClick={() => openModal(mentor)}>Request Mentorship</button>
          </div>
        ))}
      </div>
      {/* Mentorship Request Modal */}
      {showModal && selectedMentor && (
        <div className="modal-overlay" style={{ position: 'fixed', top:0, left:0, right:0, bottom:0, background: 'rgba(0,0,0,0.2)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
          <div className="modal-content" style={{ background:'#fff', borderRadius:'8px', padding:'2rem', minWidth:'320px', boxShadow:'0 2px 16px rgba(0,0,0,0.12)' }}>
            <h3>Request Mentorship from {selectedMentor.name}</h3>
            {submitted ? (
              <div style={{ color: '#1a7f37', marginTop: '1rem' }}>
                Request sent! Thank you.
                <button className="request-btn" style={{ marginLeft: '1rem' }} onClick={closeModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem', marginTop:'1rem' }}>
                <textarea
                  name="message"
                  placeholder="What would you like help with?"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  style={{ padding:'0.5rem', borderRadius:'4px', border:'1px solid #d1fae5', minHeight:'80px' }}
                />
                <div style={{ display:'flex', justifyContent:'flex-end', gap:'1rem' }}>
                  <button type="button" className="request-btn" style={{ background:'#ccc', color:'#222' }} onClick={closeModal}>Cancel</button>
                  <button type="submit" className="request-btn">Send Request</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      {/* Display submitted mentorship requests */}
      {requests.length > 0 && (
        <div className="requests-section">
          <h3>Your Mentorship Requests</h3>
          <ul>
            {requests.map((req, idx) => (
              <li key={idx}>
                <strong>{req.mentor.name}</strong> ({req.mentor.expertise}): "{req.message}"
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MentorshipPage; 