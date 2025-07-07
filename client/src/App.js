import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import JobBoard from './pages/JobBoard';
import Marketplace from './pages/Marketplace';
import Mentorship from './pages/Mentorship';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
