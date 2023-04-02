import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCryptoHistoryQuery } from '@/store/coins/api';
import { IDRouteParams } from '@/types';

export const CryptoDetailsLineChart = () => {
  const { id: coinId } = useParams<keyof IDRouteParams>() as IDRouteParams;
  const [timeperiod, setTimeperiod] = useState('7d');

  const {
    data: coinHistory,
    // isFetching
  } = useGetCryptoHistoryQuery(
    {
      coinId,
      timeperiod,
    },
    { skip: !coinId },
  );

  //   console.log('coinHistory :>> ', coinHistory);

  return (
    <div>
      <span>crypto-details-line-chart</span>
    </div>
  );
};
