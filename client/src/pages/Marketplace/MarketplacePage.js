// Import React and hooks for state management
import React, { useState } from 'react';
// import '../../assets/css/marketplace.css'; // Removed because file does not exist

// Mock product data for the marketplace
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    seller: 'AudioTech',
    price: 3500,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Web Design Service',
    seller: 'CreativeWeb',
    price: 12000,
    description: 'Professional website design for your business.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    seller: 'GadgetStore',
    price: 1500,
    description: 'Ergonomic laptop stand for better posture.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Online Tutoring',
    seller: 'EduMentor',
    price: 2500,
    description: 'One-on-one online tutoring sessions for students.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80'
  }
];

// MarketplacePage component: Display products and handle purchases
function MarketplacePage() {
  // State for search functionality
  const [search, setSearch] = useState('');
  // State for selected product in modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for tracking purchased products
  const [purchased, setPurchased] = useState([]);

  // Filter products based on search term
  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.seller.toLowerCase().includes(search.toLowerCase())
  );

  // Open modal for product details
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close modal and reset state
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Handle product purchase
  const handleBuy = () => {
    if (selectedProduct && !purchased.includes(selectedProduct.id)) {
      setPurchased([...purchased, selectedProduct.id]);
    }
    setShowModal(false);
  };

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h2>Marketplace</h2>
        <p>Buy and sell products or services securely</p>
        {/* Search input for filtering products */}
        <input
          type="text"
          className="marketplace-search"
          placeholder="Search products or sellers..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginTop: '1rem', padding: '0.5rem', width: '300px', borderRadius: '4px', border: '1px solid #d1fae5' }}
        />
      </div>
      {/* Display filtered products grid */}
      <div className="marketplace-listings-grid">
        {filteredProducts.length === 0 ? (
          <div>No products found.</div>
        ) : (
          filteredProducts.map(product => (
            <div className="marketplace-card" key={product.id}>
              <img src={product.image} alt={product.name} className="marketplace-image" />
              <div className="marketplace-title">{product.name}</div>
              <div className="marketplace-meta">Seller: {product.seller}</div>
              <div className="marketplace-description">{product.description}</div>
              <div className="marketplace-price">Ksh {product.price.toLocaleString()}</div>
              <button
                className="btn"
                onClick={() => openModal(product)}
                disabled={purchased.includes(product.id)}
              >
                {purchased.includes(product.id) ? 'Purchased' : 'Buy'}
              </button>
            </div>
          ))
        )}
      </div>
      {/* Purchase Confirmation Modal */}
      {showModal && selectedProduct && (
        <div className="modal-overlay" style={{ position: 'fixed', top:0, left:0, right:0, bottom:0, background: 'rgba(0,0,0,0.2)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
          <div className="modal-content" style={{ background:'#fff', borderRadius:'8px', padding:'2rem', minWidth:'320px', boxShadow:'0 2px 16px rgba(0,0,0,0.12)' }}>
            <h3>Buy {selectedProduct.name}</h3>
            <p>Seller: {selectedProduct.seller}</p>
            <p>Price: Ksh {selectedProduct.price.toLocaleString()}</p>
            <div style={{ display:'flex', justifyContent:'flex-end', gap:'1rem', marginTop:'1rem' }}>
              <button className="btn" style={{ background:'#ccc', color:'#222' }} onClick={closeModal}>Cancel</button>
              <button className="btn" onClick={handleBuy}>Confirm Purchase</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MarketplacePage; 