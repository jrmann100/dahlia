import { useEffect, type FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, useAuth } from 'util/firebase/auth';
import snack from 'util/notify';
import pages from 'components/pages';
import { Box, Button } from '@mui/material';
import spreads from 'util/spreads';

const Login: FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuthenticated, isLoadingAuth } = useAuth();
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    const next = searchParams.get('next');
    if (isLoadingAuth) {
      // wait until we know if logged in
      return;
    }
    // if logged in already
    if (isAuthenticated) {
      navigate(next === 'login' || next === null ? '/' : next);
      return;
    }
    getRedirectResult(auth)
      .then((result) => {
        if (result === null) {
          // go to google
          setCanContinue(true);
        }
      })
      .catch(snack.catch);
  }, [isAuthenticated, isLoadingAuth, navigate, searchParams, setSearchParams]);
  return isLoadingAuth ? (
    <>Loading&hellip;</>
  ) : (
    <Box
      sx={{
        ...spreads.full,
        ...spreads.centering,
      }}
    >
      <Button
        variant="contained"
        size="large"
        disabled={!canContinue}
        onClick={() => {
          signInWithRedirect(
            auth,
            new GoogleAuthProvider().setCustomParameters({
              hd: 'dali.dartmouth.edu',
              prompt: 'consent',
            })
          ).catch(snack.catch);
        }}
      >
        Log in
      </Button>
    </Box>
  );
};
export default Login;
