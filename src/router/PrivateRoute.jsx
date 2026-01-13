import { Navigate, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login-page" state={location.pathname} replace />;
  }
  return children;
}
