import { useEffect, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { auth } from 'util/firebase/auth';
import snack from 'util/notify';

const Login: FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        result === null
          ? await signInWithRedirect(auth, new GoogleAuthProvider())
          : navigate(state?.path ?? '/home');
      })
      .catch(snack.catch);
  }, [navigate, state?.path]);
  return <>You should be redirected momentarily...</>;
};
export default Login;
