// src/pages/CartPage.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, grandTotal } = useCart();
  const [editingShop, setEditingShop] = useState(null);

  if (!Object.keys(cart).length) return <div style={{ padding: 20 }}><h2>Cart is empty</h2></div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Cart</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {Object.entries(cart).map(([shopName, shopData]) => (
          <div key={shopName} style={{ border: "1px solid #ddd", padding: 12, width: 320 }}>
            <h3>{shopName}</h3>
            <div style={{ marginBottom: 8 }}>
              <button onClick={() => setEditingShop(editingShop === shopName ? null : shopName)}>
                {editingShop === shopName ? "Close Edit" : "Edit"}
              </button>
              <button onClick={() => alert(`Paying ₹${shopData.shopTotal} for ${shopName}`)} style={{ marginLeft: 8 }}>Pay</button>
              <button style={{ marginLeft: 8 }} onClick={() => { /* leave logic if needed */ }}>Leave</button>
            </div>

            <div>
              <strong>Shop total: ₹{shopData.shopTotal}</strong>
            </div>

            {editingShop === shopName && (
              <div style={{ marginTop: 8 }}>
                {Object.entries(shopData.items).map(([itemName, it]) => (
                  <div key={itemName} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div>{itemName}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <button onClick={() => removeFromCart(shopName, itemName)}>-</button>
                      <div>{it.qty}</div>
                      <button onClick={() => addToCart(shopName, { name: itemName, price: it.price })}>+</button>
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