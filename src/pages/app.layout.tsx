import { Outlet } from 'react-router-dom';

import { PersistentDrawerLeft } from '@/widgets/app-bar/app-bar';
import { Footer } from '@/widgets/footer/footer';

const AppLayout = () => (
  <div className="HolyGrail">
    <PersistentDrawerLeft>
      <Outlet />
    </PersistentDrawerLeft>
    <Footer />
  </div>
);

// eslint-disable-next-line import/no-default-export
export default AppLayout;
