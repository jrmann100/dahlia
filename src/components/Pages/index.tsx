import Me from 'components/pages/Me';
import Home from 'components/pages/Home';
import People from 'components/pages/People';
import Login from 'components/pages/Login';
import { type ReactNode } from 'react';
import Person from 'components/pages/Person';
import {
  type SvgIconComponent,
  Home as HomeIcon,
  Contacts as ContactsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const pages: Record<
  string,
  {
    path: string;
    component: ReactNode;
    needsAuth?: boolean;
    title?: string;
    sidebarIcon?: SvgIconComponent;
  }
> = {
  home: {
    path: '/home',
    component: <Home />,
    needsAuth: true,
    title: 'Home',
    sidebarIcon: HomeIcon,
  },
  people: {
    path: '/people',
    component: <People />,
    needsAuth: true,
    title: 'People',
    sidebarIcon: ContactsIcon,
  },
  me: {
    path: '/me',
    component: <Me />,
    needsAuth: true,
    title: 'Profile',
    sidebarIcon: PersonIcon,
  },
  person: {
    path: '/people/:id',
    component: <Person />,
  },
  login: { path: '/login', component: <Login />, title: 'Log in' },
};
export default pages;
