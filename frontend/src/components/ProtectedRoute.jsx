import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
