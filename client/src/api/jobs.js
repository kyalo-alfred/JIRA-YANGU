// API utility for Job Board
// This file contains functions to interact with the job board-related backend endpoints

// Fetch the list of jobs from the backend API
export async function fetchJobs() {
  const res = await fetch('/api/jobs'); // Make a GET request to the jobs API endpoint
  return res.json(); // Parse and return the JSON response
}

// TODO: Add more job API functions (create, update, delete, geo-query) 