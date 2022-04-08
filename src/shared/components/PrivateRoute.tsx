import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { STORAGE_KEY_CONSTANT } from '../utils/constants';


const PrivateRoute = ({ children }: { children: any }) => {
  const location = useLocation();

  const { authenticated } = useContext(AuthContext)  

  return authenticated? children: <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute
