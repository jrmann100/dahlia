import Me from 'components/pages/Me';
import Home from 'components/pages/Home';
import People from 'components/pages/People';
import Login from 'components/pages/Login';
import { type ReactNode } from 'react';
import Person from 'components/pages/Person';

const pages: Record<
  string,
  { path: string; component: ReactNode; needsAuth?: boolean; title: string }
> = {
  home: { path: '/home', component: <Home />, needsAuth: true, title: 'Home' },
  me: { path: '/me', component: <Me />, needsAuth: true, title: 'Profile' },
  people: {
    path: '/people',
    component: <People />,
    needsAuth: true,
    title: 'People',
  },
  person: {
    path: '/people/:id',
    component: <Person />,
    title: 'People',
  },
  login: { path: '/login', component: <Login />, title: 'Log in' },
};
export default pages;
