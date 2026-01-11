import { Navigate, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  console.log('PrivateRoute location:', location);
  if (!user) {
    return <Navigate to="/login-page" state={location.pathname} replace />;
  }
  return children;
}
