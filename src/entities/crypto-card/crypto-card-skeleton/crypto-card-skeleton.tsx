import { Skeleton, Divider } from '@mui/material';

import {
  Item,
  CardBox1,
  CardBox2,
} from '@/entities/crypto-card/crypto-card.styles';

export const CryptoCardSkeleton = () => (
  <Item>
    <CardBox1>
      <Skeleton variant="text" width="50%" height={35} />
      <Skeleton variant="circular" width={35} height={35} />
    </CardBox1>
    <Divider />
    <CardBox2>
      <p>
        <Skeleton variant="text" width="25%" height={20} />
      </p>
      <p>
        <Skeleton variant="text" width="37%" height={20} />
      </p>
      <p>
        <Skeleton variant="text" width="40%" height={20} />
      </p>
    </CardBox2>
  </Item>
);
