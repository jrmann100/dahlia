import 'util/firebase/config';
import { getAuth, onAuthStateChanged, type User } from '@firebase/auth';
import {
  createContext,
  type FC,
  useEffect,
  useState,
  useContext,
  type PropsWithChildren,
} from 'react';
import { Navigate } from 'react-router-dom';
import snack from 'util/notify';

interface AuthContextValue {
  user: User | null | undefined;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
});

export const auth = getAuth();

export const AuthContextProvider: FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  useEffect(() => onAuthStateChanged(auth, setUser, snack.catch), []);
  return <AuthContext.Provider value={{ user }} {...props} />;
};

export const useAuth = (): AuthContextValue & {
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
} => {
  const { user, ...context } = useContext(AuthContext);
  return {
    user,
    isAuthenticated: user !== null && user !== undefined,
    isLoadingAuth: user === undefined,
    ...context,
  };
};

export const Protect: FC<
  PropsWithChildren<{ enabled: boolean; path: string }>
> = ({ children, path, enabled = true }) => {
  const { isAuthenticated, isLoadingAuth } = useAuth();
  return (
    <>
      {!enabled || isAuthenticated ? (
        children
      ) : isLoadingAuth ? (
        <>Logging in&hellip; {/* todo: replace with skel */}</>
      ) : (
        <Navigate to="/login" state={{ next: path }} replace />
      )}
    </>
  );
};
