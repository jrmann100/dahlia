import { getAuth, onAuthStateChanged, type User } from '@firebase/auth';
import { createContext, type FC, useEffect, useState, useContext } from 'react';
import snack from 'util/notify';

interface AuthContextValue {
  user: User | null;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
});

const AuthContextProvider: FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  useEffect(() => onAuthStateChanged(auth, setUser, snack.catch), [auth]);
  return <AuthContext.Provider value={{ user }} {...props} />;
};

export const useAuth = (): AuthContextValue & { isLoggedIn: boolean } => {
  const { user, ...context } = useContext(AuthContext);
  return { user, isLoggedIn: user !== null, ...context };
};

export default AuthContextProvider;
