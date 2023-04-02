import { emptySplitApi } from '@/shared/api/emptySplitApi';
import {
  CoinDetailsResponseType,
  CoinHistoryResponseType,
  CoinType,
  CoinsResponseType,
} from '@/types';

const cryptosAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCryptos: builder.query<CoinsResponseType, { count: number }>({
      query: ({ count }) => ({
        url: `/coins?limit=${count}`,
        method: 'get',
      }),
      // providesTags: ['CryptoCoins'],
    }),
    getCryptoDetails: builder.query<
      CoinDetailsResponseType,
      { coinId: CoinType['uuid'] }
    >({
      query: ({ coinId }) => ({
        url: `/coin/${coinId}`,
        method: 'get',
      }),
      // providesTags: ['CryptoDetails'],
    }),
    getCryptoHistory: builder.query<
      CoinHistoryResponseType,
      { coinId: CoinType['uuid']; timeperiod: string }
    >({
      query: ({ coinId, timeperiod }) => ({
        url: `/coin/${coinId}/history/?timePeriod=${timeperiod}`,
        method: 'get',
      }),
      // providesTags: ['CryptoHistory'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptosAPI;
