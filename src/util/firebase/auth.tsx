import { getAuth, onAuthStateChanged, type User } from '@firebase/auth';
import { useEffect, useContext, useCallback } from 'react';
import { type APIPerson } from 'util/api';
import snack from 'util/notify';
import createPouch from 'util/pouch';

type NullableUser = User | null | undefined;
interface AuthContextValue {
  user: NullableUser;
  profile: APIPerson | null;
}

export const auth = getAuth();

export const [AuthContext, AuthContextProvider] = createPouch<AuthContextValue>(
  {
    user: undefined,
    profile: null,
  },
  () => {
    const { update } = useContext(AuthContext);
    const setUser = useCallback(
      (newUser: User | null): void => {
        update({ user: newUser });
      },
      [update]
    );
    useEffect(() => onAuthStateChanged(auth, setUser, snack.catch), [setUser]);
    return null;
  }
);

export const useAuth = (): {
  user: NullableUser;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
} => {
  const { user } = useContext(AuthContext);

  return {
    user,
    isAuthenticated: user !== null && user !== undefined,
    isLoadingAuth: user === undefined,
  };
};
