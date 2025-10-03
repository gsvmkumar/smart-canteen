import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import comboOffers from '../data/comboOffers.js'
import './Offers.css'

function Offers() {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleAddComboToCart = (combo) => {
    // Add combo as a special item to cart
    const comboItem = {
      name: combo.title,
      price: combo.offerPrice,
      img: combo.img,
      available: true,
      isCombo: true,
      comboItems: combo.items,
      originalPrice: combo.originalPrice,
      discount: combo.discount
    }
    
    addToCart(comboItem)
  }

  const handleShopRedirect = (shopRoute) => {
    navigate(shopRoute)
  }

  const popularOffers = comboOffers.filter(offer => offer.popular)
  const allOffers = comboOffers

  return (
    <div className="offers-container">
      {/* Header */}
      <div className="offers-header">
        <button
          onClick={() => navigate("/")}
          className="back-button"
        >
          ← Back to Home
        </button>
        <h1 className="offers-title">🎉 Special Combo Offers</h1>
        <p className="offers-subtitle">Save big with our delicious combo deals!</p>
      </div>

      {/* Popular Offers */}
      <section className="popular-section">
        <h2 className="section-title">🔥 Popular Combos</h2>
        <div className="offers-grid">
          {popularOffers.map(offer => (
            <div key={offer.id} className="offer-card popular">
              <div className="offer-badge">POPULAR</div>
              <div className="offer-image">
                <img src={offer.img} alt={offer.title} />
                <div className="discount-tag">
                  {offer.discount}% OFF
                </div>
              </div>
              
              <div className="offer-content">
                <div className="offer-shop">{offer.shop}</div>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                
                <div className="offer-items">
                  <strong>Includes:</strong>
                  <ul>
                    {offer.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="offer-pricing">
                  <span className="original-price">₹{offer.originalPrice}</span>
                  <span className="offer-price">₹{offer.offerPrice}</span>
                  <span className="savings">Save ₹{offer.originalPrice - offer.offerPrice}</span>
                </div>
                
                <div className="offer-actions">
                  <button 
                    className="add-combo-btn"
                    onClick={() => handleAddComboToCart(offer)}
                  >
                    Add Combo to Cart
                  </button>
                  <button 
                    className="visit-shop-btn"
                    onClick={() => handleShopRedirect(offer.shopRoute)}
                  >
                    Visit Shop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Offers */}
      <section className="all-offers-section">
        <h2 className="section-title">🍽️ All Combo Offers</h2>
        <div className="offers-grid">
          {allOffers.map(offer => (
            <div key={offer.id} className={`offer-card ${offer.popular ? 'popular' : ''}`}>
              {offer.popular && <div className="offer-badge">POPULAR</div>}
              
              <div className="offer-image">
                <img src={offer.img} alt={offer.title} />
                <div className="discount-tag">
                  {offer.discount}% OFF
                </div>
              </div>
              
              <div className="offer-content">
                <div className="offer-shop">{offer.shop}</div>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                
                <div className="offer-items">
                  <strong>Includes:</strong>
                  <ul>
                    {offer.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="offer-pricing">
                  <span className="original-price">₹{offer.originalPrice}</span>
                  <span className="offer-price">₹{offer.offerPrice}</span>
                  <span className="savings">Save ₹{offer.originalPrice - offer.offerPrice}</span>
                </div>
                
                <div className="offer-actions">
                  <button 
                    className="add-combo-btn"
                    onClick={() => handleAddComboToCart(offer)}
                  >
                    Add Combo to Cart
                  </button>
                  <button 
                    className="visit-shop-btn"
                    onClick={() => handleShopRedirect(offer.shopRoute)}
                  >
                    Visit Shop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="terms-section">
        <h3>Terms & Conditions</h3>
        <ul>
          <li>All combo offers are valid until mentioned date</li>
          <li>Combos cannot be modified or substituted</li>
          <li>Offers are subject to availability</li>
          <li>Management reserves the right to modify or cancel offers</li>
        </ul>
      </section>
    </div>
  )
}

export default Offers