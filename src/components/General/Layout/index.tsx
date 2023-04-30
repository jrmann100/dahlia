import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { type FC } from 'react';
import Sidebar from 'components/General/Sidebar';

const Layout: FC = () => (
  <>
    <Sidebar open />
    <Header />
    <Outlet />
  </>
);

export default Layout;
