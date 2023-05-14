import { Box, styled } from '@mui/material';
import Loading from 'components/app/Loading';
import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

const AppBarOffset = styled('div')(({ theme }) => theme.mixins.toolbar);
const Main: FC = () => (
  <Box
    component="main"
    sx={{
      backgroundColor: (theme) => theme.palette.grey[100],
      flexGrow: 1,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <AppBarOffset />
    <Box
      sx={{
        p: 4,
        flexGrow: 1,
        maxHeight: '100vh',
        overflowY: 'scroll',
        position: 'relative',
      }}
    >
      <Outlet />
      <Loading />
    </Box>
  </Box>
);

export default Main;
