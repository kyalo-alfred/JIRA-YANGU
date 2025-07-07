// API utility for Marketplace
export async function fetchProducts() {
  const res = await fetch('/api/marketplace');
  return res.json();
}
// TODO: Add more marketplace API functions (create, update, delete, order, payment) 