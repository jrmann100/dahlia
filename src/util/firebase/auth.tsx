import { getAuth, onAuthStateChanged, type User } from '@firebase/auth';
import {
  createContext,
  type FC,
  useEffect,
  useState,
  useContext,
  type PropsWithChildren,
} from 'react';
import { Navigate, Route } from 'react-router-dom';
import snack from 'util/notify';

interface AuthContextValue {
  user: User | null;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
});

export const AuthContextProvider: FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  useEffect(() => onAuthStateChanged(auth, setUser, snack.catch), [auth]);
  return <AuthContext.Provider value={{ user }} {...props} />;
};

export const useAuth = (): AuthContextValue & { isAuthenticated: boolean } => {
  const { user, ...context } = useContext(AuthContext);
  return { user, isAuthenticated: user !== null, ...context };
};

export const Protect: FC<
  PropsWithChildren<{ enabled: boolean; path: string }>
> = ({ children, path, enabled = true, ...props }) => {
  const { isAuthenticated } = useAuth();
  return !enabled || isAuthenticated ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to="/login" state={{ next: path }} replace />
  );
};
