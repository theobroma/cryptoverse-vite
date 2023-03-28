import { Container } from '@mui/material';

import { HomeGlobalStats } from './home-global-stats/home-global-stats';
import { HomeTopCryptos } from './home-top-cryptos/home-top-cryptos';

const HomePage = () => (
  <Container maxWidth="lg">
    <HomeGlobalStats />
    <HomeTopCryptos />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
