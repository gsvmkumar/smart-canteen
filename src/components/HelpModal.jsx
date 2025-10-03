import React from 'react';
import './HelpModal.css';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const orderingSteps = [
    {
      step: 1,
      title: "Browse Shops",
      description: "Click on any shop tile from the home page (Juice Corner, Tiffen Center, etc.)",
      icon: "🏪"
    },
    {
      step: 2,
      title: "Select Items",
      description: "Browse through the menu items and click 'Add to cart' for items you want to order",
      icon: "🛒"
    },
    {
      step: 3,
      title: "Manage Quantity", 
      description: "Use the + and - buttons to adjust quantities of items already in your cart",
      icon: "➕➖"
    },
    {
      step: 4,
      title: "View Cart",
      description: "Click the 'Cart' button in the header to review your orders from all shops",
      icon: "👀"
    },
    {
      step: 5,
      title: "Edit Orders",
      description: "In the cart, click 'Edit' for any shop to modify quantities or remove items",
      icon: "✏️"
    },
    {
      step: 6,
      title: "Pay & Enjoy",
      description: "Click 'Pay' for individual shops or pay the grand total for all orders",
      icon: "💳"
    }
  ];

  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="help-modal-content" onClick={e => e.stopPropagation()}>
        <div className="help-modal-header">
          <h2>How to Order Food 🍽️</h2>
          <button className="help-modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="help-modal-body">
          <p className="help-intro">
            Welcome to Smart Canteen! Follow these simple steps to place your order:
          </p>
          
          <div className="help-steps">
            {orderingSteps.map((step) => (
              <div key={step.step} className="help-step">
                <div className="step-number">
                  <span className="step-icon">{step.icon}</span>
                  <span className="step-num">{step.step}</span>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="help-tips">
            <h3>💡 Pro Tips:</h3>
            <ul>
              <li>You can order from multiple shops in a single session</li>
              <li>Your cart shows items grouped by shop for easy management</li>
              <li>Use the search bar to quickly find specific dishes</li>
              <li>Check the availability status before adding items</li>
            </ul>
          </div>

          <div className="help-contact">
            <h3>Need More Help?</h3>
            <p>Contact the canteen staff or call: <strong>+91 9876543210</strong></p>
          </div>
        </div>

        <div className="help-modal-footer">
          <button className="help-close-btn" onClick={onClose}>
            Got it! Let's Order 🚀
          </button>
        </div>
      </div>
    </div>
  );
}