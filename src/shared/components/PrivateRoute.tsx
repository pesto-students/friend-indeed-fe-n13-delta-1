import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { STORAGE_KEY_CONSTANT } from '../utils/constants';


const PrivateRoute = ({ children }: { children: any }) => {
  const location = useLocation();

  const authenticated = localStorage.getItem(STORAGE_KEY_CONSTANT) && !!localStorage.getItem(STORAGE_KEY_CONSTANT)?.length

  return authenticated? children: <Navigate to="/" state={{ from: location }} replace />;
}

export default PrivateRoute
