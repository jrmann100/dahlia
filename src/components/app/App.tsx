import 'util/firebase/config';
import 'assets/include.scss';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Layout from 'components/app/Layout';
import { type FC } from 'react';
import pages from 'components/pages';
import { AuthContextProvider } from 'util/firebase/auth';
import { AppContextProvider } from 'util/context';
import Page from 'components/app/Page';
import Protect from 'components/app/Protect';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={pages.people.path} replace /> },
        ...Object.values(pages).map(
          ({ path, component, title, needsAuth = false }) => ({
            path,
            element: (
              <Protect enabled={needsAuth} path={path}>
                <Page title={title}>{component}</Page>
              </Protect>
            ),
          })
        ),
        { path: '*', element: <Page title="404">404</Page> },
      ],
    },
  ]);
  return (
    <AppContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </AppContextProvider>
  );
};
export default App;
