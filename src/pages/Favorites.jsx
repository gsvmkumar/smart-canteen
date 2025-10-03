import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useCart } from '../context/CartContext'
import ItemCard from '../components/ItemCard'

function Favorites() {
  const navigate = useNavigate()
  const { favorites } = useFavorites()
  const { cart, addToCart, removeFromCart } = useCart()

  const qtyInCart = (shopName, itemName) => cart[shopName]?.items?.[itemName]?.qty || 0

  // Group favorites by shop
  const favoritesByShop = favorites.reduce((acc, item) => {
    if (!acc[item.shopName]) {
      acc[item.shopName] = []
    }
    acc[item.shopName].push(item)
    return acc
  }, {})

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
        marginBottom: "32px"
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
          ← Back to Home
        </button>
        <h1 style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: "700",
          color: "#333"
        }}>
          My Favorites ⭐
        </h1>
        <span style={{
          marginLeft: "16px",
          padding: "4px 12px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: 20,
          fontSize: "14px",
          fontWeight: "600"
        }}>
          {favorites.length} items
        </span>
      </div>

      {favorites.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>⭐</div>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "24px", color: "#333" }}>
            No Favorites Yet
          </h3>
          <p style={{ margin: "0 0 24px 0", color: "#666", fontSize: "16px" }}>
            Start adding items to your favorites by clicking the star button on any item!
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600"
            }}
          >
            Browse Shops
          </button>
        </div>
      ) : (
        <div>
          {Object.entries(favoritesByShop).map(([shopName, items]) => (
            <div key={shopName} style={{ marginBottom: "40px" }}>
              {/* Shop Header */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#333"
                }}>
                  {shopName}
                </h2>
                <span style={{
                  marginLeft: "12px",
                  padding: "2px 8px",
                  backgroundColor: "#e3f2fd",
                  color: "#1976d2",
                  borderRadius: 12,
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  {items.length} items
                </span>
              </div>

              {/* Items Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px"
              }}>
                {items.map(item => (
                  <ItemCard
                    key={item.id}
                    shopName={item.shopName}
                    item={item}
                    onAdd={(s, item) => addToCart(s, { name: item.name, price: item.price })}
                    onRemove={(s, itemName) => removeFromCart(s, itemName)}
                    qtyInCart={qtyInCart(item.shopName, item.name)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
