import { Button } from '@mui/material';
import { type FC } from 'react';
import { auth } from 'util/firebase/auth';
import snack from 'util/notify';

const Me: FC = () => (
  <>
    your profile
    <Button
      onClick={() => {
        auth.signOut().catch(snack.catch);
      }}
    >
      log out
    </Button>
  </>
);
export default Me;
