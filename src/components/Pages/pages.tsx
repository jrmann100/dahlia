import Me from 'components/pages/Me';
import Home from 'components/pages/Home';
import People from 'components/pages/People';

const pages = {
  home: { component: <Home />, needsAuth: true },
  me: { component: <Me />, needsAuth: true },
  people: { component: <People />, needsAuth: true },
};
export default pages;
