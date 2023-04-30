import { getAuth, onAuthStateChanged, type User } from '@firebase/auth';
import { createContext, type FC, useEffect, useState } from 'react';

const AuthContext = createContext<{ user: User | null; isLoggedIn: boolean }>({
  user: null,
  isLoggedIn: false,
});

const AuthContextProvider: FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  useEffect(
    () => onAuthStateChanged(auth, setUser, console.error /* todo */),
    [auth]
  );
  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: user !== null }}
      {...props}
    />
  );
};
export default AuthContextProvider;
