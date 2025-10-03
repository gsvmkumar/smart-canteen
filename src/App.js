import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext.js";
import { CartProvider } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.js";
import Header from "./components/Header.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import JuiceCorner from "./pages/JuiceCorner.jsx";
import TiffenCenter from "./pages/TiffenCenter.jsx";
import BiriyaniPoint from "./pages/BiriyaniPoint.jsx";
import Bakery from "./pages/Bakery.jsx";
import TeaTime from "./pages/TeaTime.jsx";
import CartPage from "./pages/CartPage.jsx";
import Profile from "./pages/Profile.jsx";
import Favorites from "./pages/Favorites.jsx";
import Offers from "./pages/Offers.jsx";

function AppContent() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'white'
      }}>
        <div style={{
          fontSize: '24px',
          color: '#ff6b35'
        }}>
          🍽️ Smart Canteen
        </div>
      </div>
    );
  }

  return (
    <FavoritesProvider>
      <CartProvider>
        {isAuthenticated && <Header />}
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login />
          } />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/shop/juice-corner" element={
            <ProtectedRoute>
              <JuiceCorner />
            </ProtectedRoute>
          } />
          <Route path="/shop/tiffen-center" element={
            <ProtectedRoute>
              <TiffenCenter />
            </ProtectedRoute>
          } />
          <Route path="/shop/biriyani-point" element={
            <ProtectedRoute>
              <BiriyaniPoint />
            </ProtectedRoute>
          } />
          <Route path="/shop/bakery" element={
            <ProtectedRoute>
              <Bakery />
            </ProtectedRoute>
          } />
          <Route path="/shop/tea-time" element={
            <ProtectedRoute>
              <TeaTime />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/favorites" element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          } />
          <Route path="/offers" element={
            <ProtectedRoute>
              <Offers />
            </ProtectedRoute>
          } />
        </Routes>
      </CartProvider>
    </FavoritesProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App


