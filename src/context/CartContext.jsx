import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (shop, itemObj) => {
    setCart(prev => {
      const shopData = prev[shop] ? { ...prev[shop] } : { items: {}, shopTotal: 0 };
      const existing = shopData.items[itemObj.name] || { qty: 0, price: itemObj.price };
      const newQty = existing.qty + 1;
      shopData.items = { ...shopData.items, [itemObj.name]: { qty: newQty, price: itemObj.price } };
      shopData.shopTotal = Object.values(shopData.items).reduce((s, it) => s + it.qty * it.price, 0);
      return { ...prev, [shop]: shopData };
    });
  };

  const removeFromCart = (shop, itemName) => {
    setCart(prev => {
      if (!prev[shop]) return prev;
      const shopData = { ...prev[shop], items: { ...prev[shop].items } };
      if (!shopData.items[itemName]) return prev;
      const newQty = shopData.items[itemName].qty - 1;
      if (newQty <= 0) {
        delete shopData.items[itemName];
      } else {
        shopData.items[itemName] = { ...shopData.items[itemName], qty: newQty };
      }
      if (Object.keys(shopData.items).length === 0) {
        const newCart = { ...prev };
        delete newCart[shop];
        return newCart;
      }
      shopData.shopTotal = Object.values(shopData.items).reduce((s, it) => s + it.qty * it.price, 0);
      return { ...prev, [shop]: shopData };
    });
  };

  const clearShop = (shop) => {
    setCart(prev => {
      const nc = { ...prev };
      delete nc[shop];
      return nc;
    });
  };

  const totalItems = Object.values(cart).reduce((acc, s) => acc + Object.values(s.items).reduce((a, i) => a + i.qty, 0), 0);
  const grandTotal = Object.values(cart).reduce((acc, s) => acc + (s.shopTotal || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearShop, totalItems, grandTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
