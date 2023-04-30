import 'assets/include.scss';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/General/Layout';
import Home from 'components/Pages/Home';
import Account from 'components/Pages/Account';
import { type FC } from 'react';

const pages = { account: <Account /> };

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {Object.entries(pages).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  </>
);
export default App;
