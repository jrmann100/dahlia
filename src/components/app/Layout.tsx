import { type FC } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from 'components/app/Sidebar';
import Main from 'components/app/Main';
import { SnackbarProvider } from 'notistack';
import Header from 'components/app/Header';
import spreads from 'util/spreads';

const theme = createTheme();

const Layout: FC = () => (
  <SnackbarProvider preventDuplicate maxSnack={3}>
    <ThemeProvider theme={theme}>
      <Box sx={{ ...spreads.flex, ...spreads.full }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Main />
      </Box>
    </ThemeProvider>
  </SnackbarProvider>
);
export default Layout;
