import * as z from 'zod';

const LinksSchema = z.object({
  name: z.string(),
  type: z.string(),
  url: z.string().url(),
});

export type LinksType = z.infer<typeof LinksSchema>;

// just necessary fields
export const CoinDetailsSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  price: z.string(),
  rank: z.number(),
  marketCap: z.string(),
  '24hVolume': z.string(),
  description: z.string(),
  numberOfMarkets: z.number(),
  numberOfExchanges: z.number(),
  supply: z.object({
    confirmed: z.boolean(),
    total: z.string(),
    circulating: z.string(),
  }),
  links: z.array(LinksSchema),
  allTimeHigh: z.object({ price: z.string(), timestamp: z.number() }),
});

export type CoinDetailsType = z.infer<typeof CoinDetailsSchema>;

export const CoinDetailsResponseSchema = z.z.object({
  data: z.object({
    coin: CoinDetailsSchema,
  }),
  status: z.string(),
});

export type CoinDetailsResponseType = z.infer<typeof CoinDetailsResponseSchema>;
