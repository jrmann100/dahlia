import { getAuth, onAuthStateChanged, type User } from '@firebase/auth';
import {
  createContext,
  type FC,
  useEffect,
  useState,
  useContext,
  type PropsWithChildren,
  useMemo,
} from 'react';
import snack from 'util/notify';

interface AuthContextValue {
  user: User | null | undefined;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
});

export const auth = getAuth();

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  useEffect(() => onAuthStateChanged(auth, setUser, snack.catch), []);
  const value = useMemo(() => ({ user }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
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
