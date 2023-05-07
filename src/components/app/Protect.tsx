import pages from 'components/pages/pages';
import { useEffect, type FC, type PropsWithChildren } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from 'util/firebase/auth';

export const Protect: FC<
  PropsWithChildren<{ enabled: boolean; path: string }>
> = ({ children, path, enabled = true }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoadingAuth } = useAuth();
  useEffect(() => {
    if (!isLoadingAuth && !isAuthenticated && enabled)
      navigate({
        pathname: pages.login.path,
        search: createSearchParams({ next: path }).toString(),
      });
  }, [enabled, isAuthenticated, isLoadingAuth, navigate, path]);

  return (
    <>
      {!enabled || (!isLoadingAuth && isAuthenticated)
        ? children
        : 'Loading...'}
    </>
  );
};

export default Protect;
