import { useEffect, type FC, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, useAuth } from 'util/firebase/auth';
import snack from 'util/notify';
import pages from 'components/pages/pages';
import { Button } from '@mui/material';
import Flexbox from 'components/common/Flexbox';

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
      navigate(next === 'login' || next === null ? pages.home.path : next);
      return;
    }
    getRedirectResult(auth)
      .then((result) => {
        if (result === null) {
          // go to google
          console.log('can continue...');
          setCanContinue(true);
        }
      })
      .catch(snack.catch);
  }, [isAuthenticated, isLoadingAuth, navigate, searchParams, setSearchParams]);
  return isLoadingAuth ? (
    <>Loading&hellip;</>
  ) : (
    <Flexbox centering style={{ width: '100%', height: '100%' }}>
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
    </Flexbox>
  );
};
export default Login;
