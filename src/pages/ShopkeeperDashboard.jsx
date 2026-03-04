import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCanteenData } from "../context/CanteenDataContext";
import "./ShopkeeperDashboard.css";

const ORDER_STATUSES = ["Placed", "Preparing", "Ready", "Completed", "Cancelled"];

function ShopkeeperDashboard() {
  const navigate = useNavigate();
  const { username, shopId, logout } = useAuth();
  const {
    shops,
    orders,
    getMenuItems,
    setShopOpenState,
    addMenuItem,
    updateMenuItem,
    removeMenuItem,
    updateOrderStatus,
  } = useCanteenData();

  const [activeTab, setActiveTab] = useState("overview");
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    category: "General",
    available: true,
    isVeg: true,
    img: "",
  });

  const currentShop = shops.find((shop) => shop.id === shopId);
  const shopItems = getMenuItems(shopId);
  const shopOrders = orders.filter((order) => order.shopName === shopId);

  const stats = useMemo(() => {
    const pendingOrders = shopOrders.filter((order) => order.status !== "Completed").length;
    const revenue = shopOrders
      .filter((order) => order.status !== "Cancelled")
      .reduce((sum, order) => sum + (Number(order.total) || 0), 0);
    const availableItems = shopItems.filter((item) => item.available).length;

    return {
      pendingOrders,
      revenue,
      availableItems,
      totalItems: shopItems.length,
    };
  }, [shopItems, shopOrders]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (!shopId || !newItem.name || !newItem.price) return;

    addMenuItem(shopId, {
      ...newItem,
      price: Number(newItem.price),
    });

    setNewItem({
      name: "",
      price: "",
      category: "General",
      available: true,
      isVeg: true,
      img: "",
    });
  };

  if (!currentShop) {
    return (
      <div className="shopkeeper-wrap">
        <div className="shopkeeper-panel">
          <h2>Shop not mapped for this account.</h2>
          <button onClick={handleLogout}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="shopkeeper-wrap">
      <header className="shopkeeper-header">
        <div>
          <h1>{currentShop.title} Panel</h1>
          <p>Logged in as {username}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="shopkeeper-tabs">
        {[
          { key: "overview", label: "Overview" },
          { key: "shop", label: "Shop" },
          { key: "menu", label: "Menu" },
          { key: "orders", label: "Orders" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <section className="shopkeeper-grid">
          <article>
            <h3>Shop Status</h3>
            <p>{currentShop.open ? "Open" : "Closed"}</p>
          </article>
          <article>
            <h3>Total Orders</h3>
            <p>{shopOrders.length}</p>
          </article>
          <article>
            <h3>Pending Orders</h3>
            <p>{stats.pendingOrders}</p>
          </article>
          <article>
            <h3>Menu Items</h3>
            <p>{stats.totalItems}</p>
          </article>
          <article>
            <h3>Available Items</h3>
            <p>{stats.availableItems}</p>
          </article>
          <article>
            <h3>Revenue</h3>
            <p>₹{stats.revenue}</p>
          </article>
        </section>
      )}

      {activeTab === "shop" && (
        <section className="shopkeeper-panel">
          <h2>Shop Control</h2>
          <div className="shop-row">
            <strong>{currentShop.title}</strong>
            <label>
              Open
              <input
                type="checkbox"
                checked={Boolean(currentShop.open)}
                onChange={(event) => setShopOpenState(currentShop.id, event.target.checked)}
              />
            </label>
          </div>
        </section>
      )}

      {activeTab === "menu" && (
        <section className="shopkeeper-panel">
          <h2>Menu Management</h2>
          <form className="shopkeeper-form" onSubmit={handleAddItem}>
            <input
              placeholder="Item name"
              value={newItem.name}
              onChange={(event) => setNewItem((prev) => ({ ...prev, name: event.target.value }))}
              required
            />
            <input
              type="number"
              min="1"
              placeholder="Price"
              value={newItem.price}
              onChange={(event) => setNewItem((prev) => ({ ...prev, price: event.target.value }))}
              required
            />
            <input
              placeholder="Category"
              value={newItem.category}
              onChange={(event) => setNewItem((prev) => ({ ...prev, category: event.target.value || "General" }))}
            />
            <input
              placeholder="Image URL (optional)"
              value={newItem.img}
              onChange={(event) => setNewItem((prev) => ({ ...prev, img: event.target.value }))}
            />
            <label>
              Veg
              <input
                type="checkbox"
                checked={newItem.isVeg}
                onChange={(event) => setNewItem((prev) => ({ ...prev, isVeg: event.target.checked }))}
              />
            </label>
            <label>
              Available
              <input
                type="checkbox"
                checked={newItem.available}
                onChange={(event) => setNewItem((prev) => ({ ...prev, available: event.target.checked }))}
              />
            </label>
            <button type="submit">Add Item</button>
          </form>

          <div className="shopkeeper-list">
            {shopItems.map((item) => (
              <div className="shopkeeper-item" key={item.id}>
                <input
                  value={item.name}
                  onChange={(event) => updateMenuItem(shopId, item.id, { name: event.target.value })}
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(event) =>
                    updateMenuItem(shopId, item.id, { price: Number(event.target.value) })
                  }
                />
                <input
                  value={item.category || "General"}
                  onChange={(event) =>
                    updateMenuItem(shopId, item.id, { category: event.target.value })
                  }
                />
                <label>
                  Available
                  <input
                    type="checkbox"
                    checked={Boolean(item.available)}
                    onChange={(event) =>
                      updateMenuItem(shopId, item.id, { available: event.target.checked })
                    }
                  />
                </label>
                <button className="danger" onClick={() => removeMenuItem(shopId, item.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "orders" && (
        <section className="shopkeeper-panel">
          <h2>Order Management</h2>
          <div className="shopkeeper-list">
            {shopOrders.length === 0 && <p>No orders for this shop yet.</p>}
            {shopOrders.map((order) => (
              <div className="shopkeeper-order" key={order.id}>
                <div>
                  <strong>{order.customer}</strong>
                  <p>
                    ₹{order.total} • {new Date(order.createdAt).toLocaleString()}
                  </p>
                  <p>{order.items.map((item) => `${item.name} x${item.qty}`).join(", ")}</p>
                </div>
                <select
                  value={order.status}
                  onChange={(event) => updateOrderStatus(order.id, event.target.value)}
                >
                  {ORDER_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ShopkeeperDashboard;
