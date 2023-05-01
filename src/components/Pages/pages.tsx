import Me from 'components/pages/Me';
import Home from 'components/pages/Home';
import People from 'components/pages/People';
import Login from 'components/pages/Login';
import { type ReactNode } from 'react';

const pages: Record<string, { component: ReactNode; needsAuth?: boolean }> = {
  home: { component: <Home />, needsAuth: true },
  me: { component: <Me />, needsAuth: true },
  people: { component: <People />, needsAuth: true },
  login: { component: <Login /> },
};
export default pages;
