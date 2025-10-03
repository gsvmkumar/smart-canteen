// src/pages/ShopTemplate.jsx
import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import { useCart } from "../context/CartContext";

export default function ShopTemplate({ shopName, items, onBack }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("VEG");

  const qtyInCart = (itemName) => cart[shopName]?.items?.[itemName]?.qty || 0;

  // Check if this shop has VEG/NON-VEG items (food shops vs beverage shops)
  const hasVegNonVegItems = items.some(item => item.hasOwnProperty('isVeg'));
  
  const filteredItems = hasVegNonVegItems 
    ? items.filter(item => selectedCategory === "VEG" ? item.isVeg : !item.isVeg)
    : items;

  return (
    <div style={{ 
      padding: "20px 40px",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "24px"
      }}>
        <button
          onClick={onBack}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            marginRight: "16px",
            fontSize: "14px"
          }}
        >
          ← Back
        </button>
        <h1 style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: "700",
          color: "#333"
        }}>
          {shopName}
        </h1>
      </div>

      {/* Category Filter - Only show for shops with VEG/NON-VEG items */}
      {hasVegNonVegItems && (
        <div style={{
          display: "flex",
          gap: "12px",
          marginBottom: "32px"
        }}>
          <button
            onClick={() => setSelectedCategory("VEG")}
            style={{
              padding: "8px 20px",
              backgroundColor: selectedCategory === "VEG" ? "#4CAF50" : "#fff",
              color: selectedCategory === "VEG" ? "white" : "#4CAF50",
              border: "2px solid #4CAF50",
              borderRadius: 20,
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.2s ease"
            }}
          >
            VEG
          </button>
          <button
            onClick={() => setSelectedCategory("NON-VEG")}
            style={{
              padding: "8px 20px",
              backgroundColor: selectedCategory === "NON-VEG" ? "#FF5722" : "#fff",
              color: selectedCategory === "NON-VEG" ? "white" : "#FF5722",
              border: "2px solid #FF5722",
              borderRadius: 20,
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.2s ease"
            }}
          >
            NON-VEG
          </button>
        </div>
      )}

      {/* Items Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        marginTop: "20px"
      }}>
        {filteredItems.map(it => (
          <ItemCard
            key={it.name}
            shopName={shopName}
            item={it}
            onAdd={(s, item) => addToCart(s, { name: item.name, price: item.price })}
            onRemove={(s, itemName) => removeFromCart(s, itemName)}
            qtyInCart={qtyInCart(it.name)}
          />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "40px",
          color: "#666",
          fontSize: "16px"
        }}>
          {hasVegNonVegItems 
            ? `No ${selectedCategory} items available in this shop.`
            : "No items available in this shop."
          }
        </div>
      )}
    </div>
  );
}