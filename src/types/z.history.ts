import * as z from 'zod';

const HistoryItemSchema = z.object({
  price: z.string(),
  timestamp: z.number(),
});

export type HistoryItemType = z.infer<typeof HistoryItemSchema>;

export const CoinHistoryResponseSchema = z.object({
  data: z.object({
    history: z.array(HistoryItemSchema),
    change: z.string(),
  }),
  status: z.string(),
});

export type CoinHistoryResponseType = z.infer<typeof CoinHistoryResponseSchema>;
