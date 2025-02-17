export const isAuthenticated = () => !!localStorage.getItem('token');
export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};
