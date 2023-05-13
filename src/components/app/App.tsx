import 'util/firebase/config';
import 'assets/include.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/app/Layout';
import { type FC } from 'react';
import pages from 'components/pages';
import { AuthContextProvider } from 'util/firebase/auth';
import { AppContextProvider } from 'util/context';
import Page from 'components/app/Page';
import Protect from 'components/app/Protect';

const App: FC = () => (
  <AppContextProvider>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={pages.home.path} replace />} />
          {Object.values(pages).map(
            ({ path, component, title, needsAuth = false }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Protect enabled={needsAuth} path={path}>
                    <Page title={title}>{component}</Page>
                  </Protect>
                }
              />
            )
          )}
          <Route path="*" element={<Page title="404">404</Page>} />
        </Route>
      </Routes>
    </AuthContextProvider>
  </AppContextProvider>
);
export default App;
