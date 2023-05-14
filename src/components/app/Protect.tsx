import pages from 'components/pages';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { AppContext } from 'util/context';
import { useAuth } from 'util/firebase/auth';
import { usePouch } from 'util/pouch';

export const Protect: FC<
  PropsWithChildren<{ enabled: boolean; path: string }>
> = ({ children, path, enabled = true }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingAuth } = useAuth();
  const [, setLoading] = usePouch(AppContext, 'showLoader');
  useEffect(() => {
    if (!isLoadingAuth && !isAuthenticated && enabled) {
      navigate({
        pathname: pages.login.path,
        search: createSearchParams({ next: path }).toString(),
      });
    }
    setLoading(isLoadingAuth);
  }, [enabled, isAuthenticated, isLoadingAuth, navigate, path, setLoading]);

  return (
    <>
      {!enabled || (!isLoadingAuth && isAuthenticated)
        ? children
        : 'Loading...'}
    </>
  );
};

export default Protect;
