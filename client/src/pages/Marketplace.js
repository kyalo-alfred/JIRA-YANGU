import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Professional Laptop Stand', price: 3500, discount: 17, seller: 'Techamek Kenya', rating: 5, reviews: 124, originalPrice: 4200, icon: '💻', inStock: true },
  { id: 2, name: 'Wireless Bluetooth Headphones', price: 2800, discount: 13, seller: 'Audio Pro', rating: 4, reviews: 89, originalPrice: 3200, icon: '🎧', inStock: true },
  { id: 3, name: 'Ergonomic Office Chair', price: 8500, discount: 15, seller: 'Office Solutions', rating: 5, reviews: 67, originalPrice: 10000, icon: '🦑', inStock: false },
  { id: 4, name: 'Portable Power Bank', price: 1200, discount: 20, seller: 'Power Tech', rating: 4, reviews: 203, originalPrice: 1500, icon: '🔋', inStock: true },
];

function Marketplace() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);
  const [deliveryCode, setDeliveryCode] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const openCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setShowModal(true);
    setPaymentStep(1);
  };

  const closeMpesaModal = () => {
    setShowModal(false);
    setPaymentStep(1);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="marketplace-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Marketplace + M-Pesa Escrow</h1>
          <div className="header-actions">
            <div className="cart-icon" onClick={() => {}}>
              🛒 <span id="cartCount">{cart.length}</span>
            </div>
            <button className="checkout-btn" onClick={openCheckout}>
              Checkout (KSh <span id="totalAmount">{total.toLocaleString()}</span>)
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Products Grid */}
          <section className="products-section">
            <div className="products-grid">
              {initialProducts.map(product => (
                <div className="product-card" key={product.id} data-id={product.id} data-price={product.price}>
                  <div className="product-image">
                    <div className="product-placeholder">{product.icon}</div>
                    <div className="discount-badge">-{product.discount}%</div>
                    <button className="wishlist-btn">❤️</button>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="rating">
                      {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)} <span>({product.reviews})</span>
                    </div>
                    <div className="price">
                      <span className="current-price">KSh {product.price.toLocaleString()}</span>
                      <span className="original-price">KSh {product.originalPrice.toLocaleString()}</span>
                    </div>
                    <p className="seller">{product.seller}</p>
                    <button
                      className={`add-to-cart-btn${!product.inStock ? ' out-of-stock' : ''}`}
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery Verification */}
          <section className="delivery-section">
            <div className="delivery-card">
              <h2>🚚 Delivery Verification</h2>
              <p>Enter your delivery code to confirm receipt:</p>
              <div className="delivery-form">
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  value={deliveryCode}
                  onChange={e => setDeliveryCode(e.target.value)}
                />
                <button>Verify</button>
              </div>
              <div className="escrow-info">
                🛡️ Your payment is held in escrow until delivery is confirmed
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* M-Pesa Modal */}
      {showModal && (
        <div id="mpesaModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>💳 M-Pesa Payment</h2>
              <span className="close" onClick={closeMpesaModal}>&times;</span>
            </div>
            <div className="modal-body" id="modalBody">
              {/* Payment step content can be added here */}
              <div className="payment-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery:</span>
                  <span>KSh 200</span>
                </div>
                <div className="summary-total">
                  <span>Total:</span>
                  <span>KSh {(total + 200).toLocaleString()}</span>
                </div>
              </div>
              <button className="btn-primary" onClick={closeMpesaModal}>Simulate Payment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Marketplace; 