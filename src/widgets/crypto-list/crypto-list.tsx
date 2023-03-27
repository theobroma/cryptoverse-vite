import { Link as RouterLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { Grid } from '@mui/material';

import { CoinType } from '../../types';
import { CryptoCardSkeleton } from '../../entities/crypto-card/crypto-card-skeleton/crypto-card-skeleton';
import { CryptoCard } from '../../entities/crypto-card/crypto-card';

interface Props {
  coins: CoinType[];
  isLoading: boolean;
}

export const CryptoList = ({ coins, isLoading }: Props) => {
  return (
    <>
      {coins.map((coin, idx: number) => (
        <Grid item xs={12} md={6} lg={4} key={nanoid()}>
          {isLoading ? (
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
          {/* {idx % 2 === 0 ? (
              <CryptoCard coin={coin} />
            ) : (
              <CryptoCardSkeleton />
            )} */}
        </Grid>
      ))}
    </>
  );
};
