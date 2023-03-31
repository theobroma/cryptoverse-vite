// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#skipping-queries-with-typescript-using-skiptoken
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { AppAccordion } from '@/shared/uikit/app-accordion/app-accordion';
import { useGetCryptoDetailsQuery } from '@/store/coins/api';
import { IDRouteParams } from '@/types';

export const CryptoDetailsInfo = () => {
  const { id: coinId } = useParams<keyof IDRouteParams>() as IDRouteParams;

  const {
    data,
    // isFetching
  } = useGetCryptoDetailsQuery({ coinId }, { skip: !coinId });

  const cryptoDetails = data?.data?.coin;
  const title = `What is ${cryptoDetails?.name || ''}?`;

  //   if (isFetching) return <LoadingPage />;

  return (
    <AppAccordion title={title}>
      {parse(cryptoDetails?.description || '')}
    </AppAccordion>
  );
};
