import { Box, Container, styled } from '@mui/material';
import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

const AppBarOffset = styled('div')(({ theme }) => theme.mixins.toolbar);
const Main: FC = () => (
  <Box
    component="main"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    }}
  >
    <AppBarOffset />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Outlet />
    </Container>
  </Box>
);

export default Main;
