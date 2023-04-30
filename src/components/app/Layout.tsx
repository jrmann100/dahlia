import Header from './Header';
import { useState, type FC, useCallback } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from 'components/app/Sidebar';
import Main from 'components/app/Main';
import { SnackbarProvider } from 'notistack';

const theme = createTheme();

const Layout: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);
  return (
    <>
      <SnackbarProvider preventDuplicate maxSnack={3}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar toggleMenu={toggleMenu} open={menuOpen} />
          <Header toggleMenu={toggleMenu} />
          <Main />
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
};
export default Layout;
