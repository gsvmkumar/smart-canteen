// Utility functions for authentication
export const isAuthenticated = () => {
  return localStorage.getItem('username') !== null;
};

export const getUsername = () => {
  return localStorage.getItem('username') || '';
};

export const logout = () => {
  localStorage.removeItem('username');
};