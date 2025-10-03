import React, { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

function Cart({ mode = 'view' }) {
  const { inc, dec, getGroupedCart, getShopTotal, clear } = useCart()
  const [edit, setEdit] = useState(mode === 'edit')

  const grouped = getGroupedCart()
  const shopIds = Object.keys(grouped)

  if (shopIds.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="cart-header">
        <h2>Cart</h2>
        <div className="cart-actions">
          <button className="btn" onClick={() => setEdit(true)}>Edit</button>
          <button className="btn" onClick={() => { clear(); }}>Leave</button>
        </div>
      </div>

      {shopIds.map(shopId => {
        const items = grouped[shopId]
        const itemList = Object.values(items)
        if (edit) {
          // Show only ordered items (already is)
        }
        return (
          <div className="cart-shop" key={shopId}>
            <h3>{shopId}</h3>
            {itemList.map(it => (
              <div className="cart-line" key={it.id}>
                <div className="cart-line__name">{it.name}</div>
                <div className="cart-line__qty">
                  <button className="btn" onClick={() => dec(shopId, it.id)}>-</button>
                  <span>{it.qty}</span>
                  <button className="btn" onClick={() => inc(shopId, it.id)}>+</button>
                </div>
                <div className="cart-line__price">₹{it.price * it.qty}</div>
              </div>
            ))}
            <div className="cart-total">Total: ₹{getShopTotal(shopId)}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
              <button className="btn btn--primary" onClick={() => alert(`Stub: Pay for ${shopId}`)}>Pay for this shop</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cart


