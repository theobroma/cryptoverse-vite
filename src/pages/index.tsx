import pMinDelay from 'p-min-delay';
import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const MIN_LAZY_DELAY = 300;

const AppLayout = lazy(() => pMinDelay(import('./app.layout'), MIN_LAZY_DELAY));
const HomePage = lazy(() =>
  pMinDelay(import('./home/home.page'), MIN_LAZY_DELAY),
);
const CryptoDetailsPage = lazy(() =>
  pMinDelay(import('./crypto-details/crypto-details.page'), MIN_LAZY_DELAY),
);

export const Routing = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path="/search" element={<SearchPage />} /> */}
      <Route path="cryptocurrencies/:id" element={<CryptoDetailsPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  </Routes>
);
