// Import the core React library
import React from 'react';
// Import the ReactDOM client for rendering the app to the DOM
import ReactDOM from 'react-dom/client';
// Import the main App component (root of the application)
import App from './App';

// Create a root container to render the React app
// 'root' is the id of the div in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode helps highlight potential problems in an application
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);
