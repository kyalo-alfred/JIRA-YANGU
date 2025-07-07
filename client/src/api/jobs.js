// API utility for Job Board
export async function fetchJobs() {
  const res = await fetch('/api/jobs');
  return res.json();
}
// TODO: Add more job API functions (create, update, delete, geo-query) 