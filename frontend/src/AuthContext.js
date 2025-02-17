import React, { createContext, useState, useContext, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  // Check for token in localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({ isAuthenticated: true, token });
    }
  }, []);

  // Login function
  const login = (token, user) => {
    setAuth({ isAuthenticated: true, token, user });
    localStorage.setItem('token', token); // Save token to localStorage
  };

  // Logout function
  const logout = () => {
    setAuth({ isAuthenticated: false, token: null, user: null });
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
