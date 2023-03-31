import { Container, Grid } from '@mui/material';

import { CryptoDetailsInfo } from './crypto-details-info/crypto-details-info';
import { CryptoDetailsLinks } from './crypto-details-links/crypto-details-links';

const CryptoDetailsPage = () => (
  <Container maxWidth="lg">
    <Grid container spacing={2}>
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
