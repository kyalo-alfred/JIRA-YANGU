// Import React and necessary hooks for context and state management
import React, { createContext, useContext, useState } from 'react';

// Create the authentication context
const AuthContext = createContext();

// AuthProvider component: Provides authentication state and functions to its children
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Holds the current user object (null if not logged in)

  // Function to log in a user (sets the user state)
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out a user (clears the user state)
  const logout = () => {
    setUser(null);
  };

  return (
    // Provide user, login, and logout to all children components
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access authentication context from any component
export function useAuth() {
  return useContext(AuthContext);
} 