import millify from 'millify';

import { Box, Grid, Typography } from '@mui/material';

import { StatsBlock } from '@/entities/stats-block/stats-block';
import { AppError } from '@/shared/uikit/app-error/app-error';
import { useGetCryptosQuery } from '@/store/coins/api';

export const HomeGlobalStats = () => {
  const { data, error, isError, isFetching, isLoading, isSuccess } =
    useGetCryptosQuery({ count: 10 });
  const globalStats = data?.data?.stats;
  //   const coins = data?.data?.coins;
  // console.log('globalStats :>> ', globalStats);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Title */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography component="h2" variant="h5">
              Global Crypto Stats
            </Typography>
          </Box>
        </Grid>
        {!!isSuccess && (
          <>
            {/* 1 */}
            <Grid item xs={12} md={12}>
              <StatsBlock
                title="Total Cryptocurrencies"
                value={millify(globalStats.total)}
              />
            </Grid>
            {/* 2 */}
            <Grid item xs={12} md={6}>
              <StatsBlock
                title=" Total Exchanges"
                value={millify(globalStats.totalExchanges)}
              />
            </Grid>
            {/* 3 */}
            <Grid item xs={12} md={6}>
              <StatsBlock
                title="Total Market Cap:"
                value={`$${millify(Number(globalStats.totalMarketCap))}`}
              />
            </Grid>
            {/* 4 */}
            <Grid item xs={12} md={6}>
              <StatsBlock
                title="Total 24h Volume"
                value={`$${millify(Number(globalStats.total24hVolume))}`}
              />
            </Grid>
            {/* 5  */}
            <Grid item xs={12} md={6}>
              <StatsBlock
                title="Total Markets"
                value={millify(globalStats.totalMarkets)}
              />
            </Grid>
          </>
        )}
        {/* error */}
        {!!isError && (
          <Grid item xs={12}>
            <AppError error={error} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
