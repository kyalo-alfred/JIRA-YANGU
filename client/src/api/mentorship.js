// API utility for Mentorship
export async function fetchMentors() {
  const res = await fetch('/api/mentorship');
  return res.json();
}
// TODO: Add more mentorship API functions (booking, stats, charts) 