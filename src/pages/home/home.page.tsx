import { Container } from '@mui/material';
import { HomeGlobalStats } from './home-global-stats/home-global-stats';

const HomePage = () => (
  <Container maxWidth="lg">
    <HomeGlobalStats />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
