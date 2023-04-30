import 'assets/include.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/app/Layout';
import { type FC } from 'react';
import pages from 'components/pages/pages';
import { AuthContextProvider, Protect } from 'util/firebase/auth';

const App: FC = () => (
  <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />{' '}
          {Object.entries(pages).map(
            ([path, { component, needsAuth, ...props }]) => (
              <Route
                key={path}
                path={path}
                element={
                  <Protect enabled={needsAuth} path={path}>
                    {component}
                  </Protect>
                }
                {...props}
              />
            )
          )}
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </AuthContextProvider>
  </>
);
export default App;
