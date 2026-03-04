import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const [shopId, setShopId] = useState('');
  const [loading, setLoading] = useState(true);

  const checkAuth = () => {
    const rawSession = localStorage.getItem('authSession');
    const savedUsername = localStorage.getItem('username');

    if (rawSession) {
      const session = JSON.parse(rawSession);
      setIsAuthenticated(true);
      setUsername(session.username || '');
      setRole(session.role || 'user');
      setShopId(session.shopId || '');
    } else if (savedUsername) {
      setIsAuthenticated(true);
      setUsername(savedUsername);
      setRole('user');
      setShopId('');
    } else {
      setIsAuthenticated(false);
      setUsername('');
      setRole('user');
      setShopId('');
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();

    // Listen for storage changes (for logout from other tabs)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (username, userRole = 'user', assignedShopId = '') => {
    localStorage.setItem('username', username);
    localStorage.setItem('authSession', JSON.stringify({ username, role: userRole, shopId: assignedShopId }));
    setIsAuthenticated(true);
    setUsername(username);
    setRole(userRole);
    setShopId(assignedShopId);
  };

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('authSession');
    localStorage.removeItem('userProfile'); // Clear user profile data too
    setIsAuthenticated(false);
    setUsername('');
    setRole('user');
    setShopId('');
  };

  const value = {
    isAuthenticated,
    username,
    role,
    shopId,
    isShopkeeper: role === 'shopkeeper',
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};