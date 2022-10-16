import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers/_index.containers';
import { Find, Main, Register } from './pages/_index.pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/reserve" element={<Register />} />
          <Route path="/find-reservation" element={<Find />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
