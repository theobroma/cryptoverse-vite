import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PageLoader } from '@/shared/uikit/page-loader/page-loader';
// import { QueryParamProvider } from 'use-query-params';
// import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        {/* <QueryParamProvider adapter={ReactRouter6Adapter}>
          {component()}
        </QueryParamProvider> */}
        {component()}
      </Suspense>
    </BrowserRouter>
  );
