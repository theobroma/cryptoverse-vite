import { Container } from '@mui/material';

import { AppAccordion } from '@/shared/uikit/app-accordion/app-accordion';

const CryptoDetailsPage = () => (
  <Container maxWidth="lg">
    <div>
      <span>CryptoDetailsPage</span>
    </div>
    <div>
      <AppAccordion title="What is ?">AppAccordion</AppAccordion>
    </div>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default CryptoDetailsPage;
