import { nanoid } from '@reduxjs/toolkit';
import { Link as RouterLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import { CryptoCard } from '@/entities/crypto-card/crypto-card';
import { CryptoCardSkeleton } from '@/entities/crypto-card/crypto-card-skeleton/crypto-card-skeleton';
import { CoinType } from '@/types';

interface Props {
  coins: CoinType[];
  isFetching: boolean;
}

export const CryptoList = ({ coins, isFetching }: Props) => {
  return (
    <Grid container spacing={2}>
      {coins.map((coin, idx: number) => (
        <Grid item xs={12} md={6} lg={4} key={nanoid()}>
          {isFetching ? (
            <CryptoCardSkeleton />
          ) : (
            <RouterLink
              key={coin.uuid}
              to={`/cryptocurrencies/${coin.uuid}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <CryptoCard coin={coin} />
            </RouterLink>
          )}
          {/* DON'T delete. usefull for skeleton debug */}
          {/* {idx % 2 === 0 ? <CryptoCard coin={coin} /> : <CryptoCardSkeleton />} */}
        </Grid>
      ))}
    </Grid>
  );
};
