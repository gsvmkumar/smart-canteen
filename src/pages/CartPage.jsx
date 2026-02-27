// src/pages/CartPage.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearShop, grandTotal } = useCart();
  const [editingShop, setEditingShop] = useState(null);

  if (!Object.keys(cart).length) return <div style={{ padding: 20 }}><h2>Cart is empty</h2></div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Cart</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {Object.entries(cart).map(([shopName, shopData]) => (
          <div key={shopName} style={{ 
            border: "1px solid #ddd", 
            padding: 16, 
            width: 320, 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}>
            <h3 style={{ margin: '0 0 12px 0', color: '#333', fontSize: '18px' }}>{shopName}</h3>
            <div style={{ marginBottom: 12, display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setEditingShop(editingShop === shopName ? null : shopName)}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                {editingShop === shopName ? "Close Edit" : "Edit"}
              </button>
              <button 
                onClick={() => alert(`Paying ₹${shopData.shopTotal} for ${shopName}`)} 
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
              >
                Pay
              </button>
              <button 
                style={{ 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  padding: '8px 16px', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  fontSize: '14px'
                }} 
                onClick={() => {
                  if (window.confirm(`Are you sure you want to remove all items from ${shopName}?`)) {
                    clearShop(shopName);
                    // Reset editing state if this shop was being edited
                    if (editingShop === shopName) {
                      setEditingShop(null);
                    }
                  }
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
              >
                Leave
              </button>
            </div>

            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '8px 12px', 
              borderRadius: '4px', 
              marginBottom: '12px',
              border: '1px solid #dee2e6'
            }}>
              <strong style={{ color: '#28a745', fontSize: '16px' }}>Shop total: ₹{shopData.shopTotal}</strong>
            </div>

            {editingShop === shopName && (
              <div style={{ 
                marginTop: 12, 
                backgroundColor: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '4px',
                border: '1px solid #dee2e6'
              }}>
                <h4 style={{ margin: '0 0 12px 0', color: '#495057', fontSize: '14px' }}>Edit Items:</h4>
                {Object.entries(shopData.items).map(([itemName, it]) => (
                  <div key={itemName} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    marginBottom: 8,
                    padding: '8px',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    border: '1px solid #dee2e6'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '500', color: '#333' }}>{itemName}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>₹{it.price} each</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <button 
                        onClick={() => removeFromCart(shopName, itemName)}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: '#dc3545',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '16px',
                          fontWeight: 'bold'
                        }}
                      >-</button>
                      <div style={{ 
                        minWidth: '30px', 
                        textAlign: 'center', 
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: '#007bff'
                      }}>{it.qty}</div>
                      <button 
                        onClick={() => addToCart(shopName, { name: itemName, price: it.price })}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: '#28a745',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '16px',
                          fontWeight: 'bold'
                        }}
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Grand Total: ₹{grandTotal}</h3>
      </div>
    </div>
  );
}