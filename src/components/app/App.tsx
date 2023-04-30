import 'assets/include.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/app/Layout';
import { type FC } from 'react';
import allPages from 'components/pages/pages';

const { index, ...pages } = allPages;

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={index} />
        {Object.entries(pages).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  </>
);
export default App;
