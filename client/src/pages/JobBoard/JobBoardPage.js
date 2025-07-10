// Import React and hooks for state management
import React, { useState } from 'react';
// Import CSS for job board page styling
import '../../assets/css/job-board.css';

// Mock job data for demonstration
const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Innovators',
    location: 'Nairobi',
    type: 'Full-Time',
    description: 'Work on modern web apps using React and TypeScript.'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Cloud Solutions',
    location: 'Mombasa',
    type: 'Part-Time',
    description: 'Build scalable APIs with Node.js and Express.'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Remote',
    type: 'Contract',
    description: 'Design beautiful and user-friendly interfaces.'
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Insight Analytics',
    location: 'Nakuru',
    type: 'Full-Time',
    description: 'Analyze data trends and generate business insights.'
  }
];

// JobBoardPage component: Display job listings and handle applications
function JobBoardPage() {
  // State for search functionality
  const [search, setSearch] = useState('');
  // State for selected job in modal
  const [selectedJob, setSelectedJob] = useState(null);
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for applicant form data
  const [applicant, setApplicant] = useState({ name: '', email: '', message: '' });
  // State for submission status
  const [submitted, setSubmitted] = useState(false);

  // Filter jobs based on search term
  const filteredJobs = mockJobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  // Open modal for job application
  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setApplicant({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  // Close modal and reset state
  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  // Handle form field changes
  const handleChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  // Handle job application submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In real app, send data to backend here
  };

  return (
    <div className="job-board-container">
      <div className="job-board-header">
        <h2>Job Board</h2>
        <p>Find your next opportunity</p>
        {/* Search input for filtering jobs */}
        <input
          type="text"
          className="job-search"
          placeholder="Search jobs by title, company, or location..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginTop: '1rem', padding: '0.5rem', width: '300px', borderRadius: '4px', border: '1px solid #d1fae5' }}
        />
      </div>
      {/* Display filtered job listings */}
      <div className="job-listings">
        {filteredJobs.length === 0 ? (
          <div>No jobs found.</div>
        ) : (
          filteredJobs.map(job => (
            <div className="job-card" key={job.id}>
              <div className="job-title">{job.title}</div>
              <div className="job-meta">{job.company} &bull; {job.location} &bull; {job.type}</div>
              <div className="job-description">{job.description}</div>
              <button className="apply-btn" onClick={() => openModal(job)}>Apply</button>
            </div>
          ))
        )}
      </div>
      {/* Job Application Modal */}
      {showModal && (
        <div className="modal-overlay" style={{ position: 'fixed', top:0, left:0, right:0, bottom:0, background: 'rgba(0,0,0,0.2)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
          <div className="modal-content" style={{ background:'#fff', borderRadius:'8px', padding:'2rem', minWidth:'320px', boxShadow:'0 2px 16px rgba(0,0,0,0.12)' }}>
            <h3>Apply for {selectedJob.title}</h3>
            {submitted ? (
              <div style={{ color: '#1a7f37', marginTop: '1rem' }}>
                Application submitted! Thank you.
                <button className="apply-btn" style={{ marginLeft: '1rem' }} onClick={closeModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem', marginTop:'1rem' }}>
                {/* Applicant name input */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={applicant.name}
                  onChange={handleChange}
                  required
                  style={{ padding:'0.5rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
                />
                {/* Applicant email input */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={applicant.email}
                  onChange={handleChange}
                  required
                  style={{ padding:'0.5rem', borderRadius:'4px', border:'1px solid #d1fae5' }}
                />
                {/* Application message textarea */}
                <textarea
                  name="message"
                  placeholder="Why are you a good fit?"
                  value={applicant.message}
                  onChange={handleChange}
                  required
                  style={{ padding:'0.5rem', borderRadius:'4px', border:'1px solid #d1fae5', minHeight:'80px' }}
                />
                <div style={{ display:'flex', justifyContent:'flex-end', gap:'1rem' }}>
                  <button type="button" className="apply-btn" style={{ background:'#ccc', color:'#222' }} onClick={closeModal}>Cancel</button>
                  <button type="submit" className="apply-btn">Submit Application</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default JobBoardPage; 