import React from "react";
import { useFavorites } from "../context/FavoritesContext";

export default function ItemCard({ shopName, item, onAdd, onRemove, qtyInCart }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isItemFavorite = isFavorite(shopName, item.name);
  return (
    <div style={{
      width: 300,
      backgroundColor: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
      position: "relative"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }}>
      
      {/* VEG/NON-VEG Tag - Only show if item has isVeg property */}
      {item.hasOwnProperty('isVeg') && (
        <div style={{
          position: "absolute",
          top: 12,
          left: 12,
          padding: "4px 8px",
          backgroundColor: item.isVeg ? "#4CAF50" : "#FF5722",
          color: "white",
          fontSize: "11px",
          fontWeight: "bold",
          borderRadius: 4,
          zIndex: 2
        }}>
          {item.isVeg ? "VEG" : "NON-VEG"}
        </div>
      )}

      {/* Favorite Star Button */}
      <button
        onClick={() => toggleFavorite(shopName, item)}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          width: 32,
          height: 32,
          border: "none",
          borderRadius: "50%",
          backgroundColor: isItemFavorite ? "#FFD700" : "rgba(255,255,255,0.8)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          transition: "all 0.2s ease",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      >
        <span style={{
          fontSize: "16px",
          color: isItemFavorite ? "#FF6B00" : "#666"
        }}>
          {isItemFavorite ? "★" : "☆"}
        </span>
      </button>

      {/* Food Image */}
      <div style={{
        width: "100%",
        height: 200,
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        {!item.available && (
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "14px"
          }}>
            Out of Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
        <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          fontWeight: "600",
          color: "#333",
          lineHeight: "1.4"
        }}>
          {item.name}
        </h3>
        
        <div style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#2E7D32",
          marginBottom: "16px"
        }}>
          ₹{item.price}
        </div>

        {/* Add to Cart Button */}
        {!item.available ? (
          <button disabled style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "#e0e0e0",
            color: "#999",
            border: "none",
            borderRadius: 8,
            cursor: "not-allowed",
            fontSize: "14px",
            fontWeight: "600"
          }}>
            Unavailable
          </button>
        ) : qtyInCart ? (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            backgroundColor: "#f8f9fa",
            border: "2px solid #007bff",
            borderRadius: 8,
            padding: "8px 12px"
          }}>
            <button
              onClick={() => onRemove(shopName, item.name)}
              style={{
                width: 36,
                height: 36,
                border: "none",
                borderRadius: 6,
                backgroundColor: "#dc3545",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              -
            </button>
            <span style={{
              fontWeight: "700",
              fontSize: "18px",
              minWidth: "24px",
              textAlign: "center",
              color: "#007bff"
            }}>
              {qtyInCart}
            </span>
            <button
              onClick={() => onAdd(shopName, item)}
              style={{
                width: 36,
                height: 36,
                border: "none",
                borderRadius: 6,
                backgroundColor: "#28a745",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAdd(shopName, item)}
            style={{
              width: "100%",
              padding: "12px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              transition: "background-color 0.2s ease"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
