// API utility for Mentorship
// This file contains functions to interact with the mentorship-related backend endpoints

// Fetch the list of mentors from the backend API
export async function fetchMentors() {
  const res = await fetch('/api/mentorship'); // Make a GET request to the mentorship API endpoint
  return res.json(); // Parse and return the JSON response
}

// TODO: Add more mentorship API functions (booking, stats, charts) 