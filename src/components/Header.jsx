import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useFavorites } from '../context/FavoritesContext.js'
import { useAuth } from '../context/AuthContext.js'
import { useResponsive } from '../hooks/useResponsive.js'
import HelpModal from './HelpModal.jsx'
import './components.css'

function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [profileOpen, setProfileOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const { cart, totalItems } = useCart()
  const { totalFavorites } = useFavorites()
  const { username, logout } = useAuth()
  const { isMobile } = useResponsive()
  const profileRef = useRef(null)
  const navigate = useNavigate()

  // Get user data
  const user = {
    name: username || 'User',
    email: `${username}@example.com`,
    phone: '+91 9876543210'
  }

  useEffect(() => {
    function onDoc(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality later
    console.log('Searching for:', searchQuery)
  }

  const handleLogout = () => {
    logout()
    setProfileOpen(false)
    navigate('/login')
  }

  const cartItemsCount = totalItems

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">🍽️</div>
            <span className="navbar__logo-text">Smart Canteen</span>
          </Link>
        </div>

        {/* Search Bar */}
        <form className="navbar__search" onSubmit={handleSearch}>
          <div className="search-input">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search for dishes, restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-field"
            />
          </div>
        </form>

        {/* Navigation Items */}
        <div className="navbar__actions">
          {/* Offers - Hide on mobile */}
          {!isMobile && (
            <Link to="/offers" className="navbar__item">
              <svg className="navbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                <polyline points="9,9 9,15"></polyline>
                <polyline points="15,9 15,15"></polyline>
              </svg>
              <span>Offers</span>
              <span className="navbar__badge new">NEW</span>
            </Link>
          )}

          {/* Help - Hide on mobile */}
          {!isMobile && (
            <button className="navbar__item" onClick={() => setHelpOpen(true)}>
              <svg className="navbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <point x="12" y="17"></point>
              </svg>
              <span>Help</span>
            </button>
          )}

          {/* Profile */}
          <div className="navbar__profile" ref={profileRef}>
            <button 
              className="navbar__item navbar__profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <svg className="navbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>{user.name}</span>
              <svg className={`navbar__dropdown-arrow ${profileOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>

            {profileOpen && (
              <div className="navbar__dropdown">
                <div className="dropdown__header">
                  <div className="dropdown__user-info">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>
                </div>
                
                <div className="dropdown__section">
                  <Link to="/orders" className="dropdown__item" onClick={() => setProfileOpen(false)}>
                    <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    <div>
                      <span>Orders</span>
                      <small>View your order history</small>
                    </div>
                  </Link>

                  <Link to="/profile" className="dropdown__item" onClick={() => setProfileOpen(false)}>
                    <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <div>
                      <span>Profile</span>
                      <small>Manage your account</small>
                    </div>
                  </Link>

                  <Link to="/favorites" className="dropdown__item" onClick={() => setProfileOpen(false)}>
                    <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                    </svg>
                    <div>
                      <span>Favorites</span>
                      <small>Save your favorite items</small>
                    </div>
                  </Link>

                  {/* Mobile-only items: Cart, Offers, Help */}
                  {isMobile && (
                    <>
                      <Link to="/cart" className="dropdown__item" onClick={() => setProfileOpen(false)}>
                        <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <div>
                          <span>Cart</span>
                          <small>{cartItemsCount > 0 ? `${cartItemsCount} items` : 'No items'}</small>
                        </div>
                        {cartItemsCount > 0 && (
                          <span className="navbar__badge count" style={{marginLeft: 'auto'}}>{cartItemsCount}</span>
                        )}
                      </Link>

                      <Link to="/offers" className="dropdown__item" onClick={() => setProfileOpen(false)}>
                        <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                          <polyline points="9,9 9,15"></polyline>
                          <polyline points="15,9 15,15"></polyline>
                        </svg>
                        <div>
                          <span>Offers</span>
                          <small>Special deals & combos</small>
                        </div>
                        <span className="navbar__badge new" style={{marginLeft: 'auto'}}>NEW</span>
                      </Link>

                      <button className="dropdown__item" onClick={() => { setHelpOpen(true); setProfileOpen(false); }}>
                        <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <point x="12" y="17"></point>
                        </svg>
                        <div>
                          <span>Help</span>
                          <small>Get support & assistance</small>
                        </div>
                      </button>
                    </>
                  )}
                </div>

                <div className="dropdown__section">
                  <button className="dropdown__item dropdown__logout" onClick={handleLogout}>
                    <svg className="dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16,17 21,12 16,7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <div>
                      <span>Logout</span>
                      <small>Sign out of your account</small>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart - Hide on mobile */}
          {!isMobile && (
            <Link to="/cart" className="navbar__item navbar__cart">
              <svg className="navbar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="navbar__badge count">{cartItemsCount}</span>
              )}
            </Link>
          )}
        </div>
      </div>
      
      {/* Help Modal */}
      <HelpModal 
        isOpen={helpOpen} 
        onClose={() => setHelpOpen(false)} 
      />
    </header>
  )
}

export default Header


