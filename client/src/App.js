// Import React and necessary modules from react-router-dom for routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import the main layout and all page components
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import JobBoardPage from './pages/JobBoard/JobBoardPage';
import CoursesPage from './pages/Courses/CoursesPage';
import MarketplacePage from './pages/Marketplace/MarketplacePage';
import MentorshipPage from './pages/Mentorship/MentorshipPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
// Import global CSS for styling different pages
import './assets/css/homepage.css';
import './assets/css/courses.css';
import './assets/css/job-board.css';
import './assets/css/mentorship.css';
// Import authentication context and hook
import { AuthProvider, useAuth } from './components/Auth/AuthContext';

// PrivateRoute component: Protects routes that require authentication
// If the user is not logged in, redirects to the login page
function PrivateRoute({ children }) {
  const { user } = useAuth(); // Get the current user from AuthContext
  return user ? children : <Navigate to="/login" replace />;
}

// AppRoutes component: Defines all application routes and wraps them in the main Layout
function AppRoutes() {
  return (
    <Layout>
      <Routes>
        {/* Public homepage route */}
        <Route path="/" element={<Homepage />} />
        {/* Protected routes: Only accessible if logged in */}
        <Route path="/jobboard" element={<PrivateRoute><JobBoardPage /></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><CoursesPage /></PrivateRoute>} />
        <Route path="/marketplace" element={<PrivateRoute><MarketplacePage /></PrivateRoute>} />
        <Route path="/mentorship" element={<PrivateRoute><MentorshipPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        {/* Auth routes: Login and Signup are always accessible */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

// App component: The root of the React app
// Wraps everything in AuthProvider (for authentication state) and Router (for navigation)
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
