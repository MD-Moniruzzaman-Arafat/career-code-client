import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import auth from '../../firebase.config';
import { AuthContext } from '../context';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, setUser, authError, setAuthError, createUser };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
