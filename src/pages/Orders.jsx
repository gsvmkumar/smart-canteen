import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useCanteenData } from '../context/CanteenDataContext'
import './pages.css'

function Orders() {
  const { username } = useAuth()
  const { orders } = useCanteenData()

  const myOrders = orders.filter(order => order.customer === username)

  if (!myOrders.length) {
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

  return (
    <div className="container">
      <h2>Your Orders</h2>
      <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
        {myOrders.map(order => (
          <div key={order.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
              <strong>{order.shopName}</strong>
              <span>Status: {order.status}</span>
            </div>
            <div style={{ color: '#6b7280', marginTop: '6px', fontSize: '14px' }}>
              {new Date(order.createdAt).toLocaleString()}
            </div>
            <div style={{ marginTop: '8px' }}>
              {order.items.map(item => (
                <div key={`${order.id}-${item.name}`} style={{ fontSize: '14px', color: '#374151' }}>
                  {item.name} x{item.qty} - ₹{item.price * item.qty}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '8px', fontWeight: 700 }}>Total: ₹{order.total}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
