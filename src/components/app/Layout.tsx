import { type FC } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from 'components/app/Sidebar';
import Main from 'components/app/Main';
import { SnackbarProvider } from 'notistack';
import Header from 'components/app/Header';
import spreads from 'util/spreads';
import { ScrollRestoration } from 'react-router-dom';

const theme = createTheme();

const Layout: FC = () => (
  <SnackbarProvider preventDuplicate maxSnack={3}>
    <ThemeProvider theme={theme}>
      {/* fixme: doesn't work for pages like <People> because needs loader to know height */}
      <ScrollRestoration />
      <Box sx={{ display: 'flex', ...spreads.full }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Main />
      </Box>
    </ThemeProvider>
  </SnackbarProvider>
);
export default Layout;
