// API utility for Marketplace
// This file contains functions to interact with the marketplace-related backend endpoints

// Fetch the list of products from the backend API
export async function fetchProducts() {
  const res = await fetch('/api/marketplace'); // Make a GET request to the marketplace API endpoint
  return res.json(); // Parse and return the JSON response
}

// TODO: Add more marketplace API functions (create, update, delete, order, payment) 