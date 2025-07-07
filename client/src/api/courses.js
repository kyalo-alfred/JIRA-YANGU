// API utility for Courses
export async function fetchCourses() {
  const res = await fetch('/api/courses');
  return res.json();
}
// TODO: Add more course API functions (create, update, delete, quiz, certificate) 