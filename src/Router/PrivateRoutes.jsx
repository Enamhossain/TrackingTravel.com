// eslint-disable-next-line no-unused-vars
import React from 'react'
import LoadingSpinner from '../Component/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation()
  
    if (loading) {
      return <LoadingSpinner />;
    }
  
    if (user) {
      return children;
    }
  
    return <Navigate to={"/login"} state={{from:location}} replace />;
}

export default PrivateRoutes