import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import JobBoardPage from './pages/JobBoard/JobBoardPage';
import CoursesPage from './pages/Courses/CoursesPage';
import MarketplacePage from './pages/Marketplace/MarketplacePage';
import MentorshipPage from './pages/Mentorship/MentorshipPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './assets/css/homepage.css';
import './assets/css/courses.css';
import './assets/css/job-board.css';
import './assets/css/mentorship.css';
import { AuthProvider, useAuth } from './components/Auth/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jobboard" element={<PrivateRoute><JobBoardPage /></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><CoursesPage /></PrivateRoute>} />
        <Route path="/marketplace" element={<PrivateRoute><MarketplacePage /></PrivateRoute>} />
        <Route path="/mentorship" element={<PrivateRoute><MentorshipPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
