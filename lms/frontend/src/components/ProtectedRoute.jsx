import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children,role}) {
    const token = localStorage.getItem("token");
    const user = (localStorage.getItem("user"));

    if(!token) <Navigate to="/login" />
     
      if (role && user?.role !== role) {
        return <h2>Access Denied</h2>;
    }

    return children
}

export default ProtectedRoute