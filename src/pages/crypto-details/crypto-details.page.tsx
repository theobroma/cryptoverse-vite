import { Container, Grid } from '@mui/material';

import { CryptoDetailsInfo } from './crypto-details-info/crypto-details-info';
import { CryptoDetailsLineChart } from './crypto-details-line-chart/crypto-details-line-chart';
import { CryptoDetailsLinks } from './crypto-details-links/crypto-details-links';
import { CryptoDetailsOtherStatsInfo } from './crypto-details-other-stats-info/crypto-details-other-stats-info';
import { CryptoDetailsValueStatistics } from './crypto-details-value-statistics/crypto-details-value-statistics';

const CryptoDetailsPage = () => (
  <Container maxWidth="lg">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CryptoDetailsLineChart />
      </Grid>
      <Grid item xs={12}>
        <CryptoDetailsValueStatistics />
      </Grid>
      <Grid item xs={12}>
        <CryptoDetailsOtherStatsInfo />
      </Grid>
      <Grid item xs={12}>
        <CryptoDetailsInfo />
      </Grid>
      <Grid item xs={12}>
        <CryptoDetailsLinks />
      </Grid>
    </Grid>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default CryptoDetailsPage;
