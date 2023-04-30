import Header from '../Header';
import { useState, type FC, useCallback } from 'react';
import Sidebar from 'components/General/Sidebar';
import Main from 'components/General/Main';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const Layout: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar toggleMenu={toggleMenu} open={menuOpen} />
        <Header toggleMenu={toggleMenu} />
        <Main />
      </ThemeProvider>
    </>
  );
};
export default Layout;
