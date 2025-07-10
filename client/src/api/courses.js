// API utility for Courses
// This file contains functions to interact with the courses-related backend endpoints

// Fetch the list of courses from the backend API
export async function fetchCourses() {
  const res = await fetch('/api/courses'); // Make a GET request to the courses API endpoint
  return res.json(); // Parse and return the JSON response
}

// TODO: Add more course API functions (create, update, delete, quiz, certificate) 