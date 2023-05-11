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
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <AppBarOffset />
    <Container sx={{ p: 4, flexGrow: 1 }}>
      <Outlet />
    </Container>
  </Box>
);

export default Main;
