import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';
import useAuth from '../hook/useAuth';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login-page" state={location.pathname} replace />;
  }
  return children;
}
