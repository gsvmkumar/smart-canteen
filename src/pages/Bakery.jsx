import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useCart } from "../context/CartContext";
import bakeryItems from "../data/bakeryItems";

export default function Bakery() {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("Drinks");

  const categories = ["Drinks", "Snacks", "Desserts"];
  const shopName = "Bakery";

  const qtyInCart = (itemName) => cart[shopName]?.items?.[itemName]?.qty || 0;

  const filteredItems = bakeryItems.filter(item => item.category === selectedCategory);

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
          onClick={() => navigate("/")}
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

      {/* Category Navigation */}
      <div style={{
        display: "flex",
        gap: "12px",
        marginBottom: "32px"
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 24px",
              backgroundColor: selectedCategory === category ? "#007bff" : "#fff",
              color: selectedCategory === category ? "white" : "#007bff",
              border: "2px solid #007bff",
              borderRadius: 25,
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.2s ease"
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        marginTop: "20px"
      }}>
        {filteredItems.map(item => (
          <ItemCard
            key={item.name}
            shopName={shopName}
            item={item}
            onAdd={(s, item) => addToCart(s, { name: item.name, price: item.price })}
            onRemove={(s, itemName) => removeFromCart(s, itemName)}
            qtyInCart={qtyInCart(item.name)}
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
          No items available in {selectedCategory} category.
        </div>
      )}
    </div>
  );
}


