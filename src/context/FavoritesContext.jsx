import React, { createContext, useContext, useReducer } from 'react'

const FavoritesContext = createContext()

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const itemId = `${action.shopId}-${action.item.id}`
      const existingIndex = state.findIndex(fav => fav.id === itemId)
      
      if (existingIndex >= 0) {
        // Remove from favorites
        return state.filter(fav => fav.id !== itemId)
      } else {
        // Add to favorites
        return [...state, {
          id: itemId,
          shopId: action.shopId,
          item: action.item,
          addedAt: new Date().toISOString()
        }]
      }
    
    case 'CLEAR_FAVORITES':
      return []
    
    default:
      return state
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, [])

  const toggleFavorite = (shopId, item) => {
    dispatch({ type: 'TOGGLE_FAVORITE', shopId, item })
  }

  const isFavorite = (shopId, itemId) => {
    const favoriteId = `${shopId}-${itemId}`
    return favorites.some(fav => fav.id === favoriteId)
  }

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' })
  }

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
