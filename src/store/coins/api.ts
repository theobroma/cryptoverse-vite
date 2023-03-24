import { emptySplitApi } from '../../shared/api/emptySplitApi';

const cryptosAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getCryptos: builder.query<
      any,
      // CreditsResponseType,
      { count: number }
    >({
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
