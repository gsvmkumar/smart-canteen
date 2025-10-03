import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (shopName, item) => {
    const favoriteItem = {
      ...item,
      shopName,
      id: `${shopName}-${item.name}` // Unique ID for the favorite
    };
    
    setFavorites(prev => {
      // Check if item is already in favorites
      const exists = prev.some(fav => fav.id === favoriteItem.id);
      if (exists) {
        return prev; // Don't add duplicates
      }
      return [...prev, favoriteItem];
    });
  };

  const removeFromFavorites = (shopName, itemName) => {
    const itemId = `${shopName}-${itemName}`;
    setFavorites(prev => prev.filter(fav => fav.id !== itemId));
  };

  const isFavorite = (shopName, itemName) => {
    const itemId = `${shopName}-${itemName}`;
    return favorites.some(fav => fav.id === itemId);
  };

  const toggleFavorite = (shopName, item) => {
    if (isFavorite(shopName, item.name)) {
      removeFromFavorites(shopName, item.name);
    } else {
      addToFavorites(shopName, item);
    }
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    totalFavorites: favorites.length
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}