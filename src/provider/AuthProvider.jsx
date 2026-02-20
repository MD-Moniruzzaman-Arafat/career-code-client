import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { AuthContext } from '../context';
import { jwtToken } from '../utils/api';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Auth Provider
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const res = await jwtToken(currentUser?.email);
        // console.log('JWT Token Response:', res);
      }
      // localStorage.setItem('access-token', res);
      // console.log('Auth State Changed:', currentUser);
      currentUser ? setLoading(false) : setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    setLoading,
    loading,
    user,
    setUser,
    authError,
    setAuthError,
    createUser,
    logInUser,
    logoutUser,
    googleLogin,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
