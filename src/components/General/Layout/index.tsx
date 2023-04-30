import Header from '../Header';
import { type FC } from 'react';
import Sidebar from 'components/General/Sidebar';
import Main from 'components/General/Main';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const Layout: FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar open />
      <Header />
      <Main />
    </ThemeProvider>
  </>
);

export default Layout;
