import { emptySplitApi } from '../../shared/api/emptySplitApi';
import { CoinsResponseType } from '../../types';

const cryptosAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCryptos: builder.query<CoinsResponseType, { count: number }>({
      query: ({ count }) => ({
        url: `/coins?limit=${count}`,
        method: 'get',
      }),
      // providesTags: ['CryptoCoins'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCryptosQuery } = cryptosAPI;
