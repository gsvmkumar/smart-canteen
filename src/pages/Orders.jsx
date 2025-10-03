import React from 'react'
import './pages.css'

function Orders() {
  return (
    <div className="container">
      <h2>Your Orders</h2>
      <div style={{ padding: '40px', textAlign: 'center', color: '#6b7280' }}>
        <svg style={{ width: '64px', height: '64px', margin: '0 auto 16px', display: 'block' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
        <h3>No orders yet</h3>
        <p>Your order history will appear here once you place your first order.</p>
      </div>
    </div>
  )
}

export default Orders
