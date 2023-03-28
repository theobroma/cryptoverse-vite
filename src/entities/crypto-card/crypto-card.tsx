import millify from 'millify';

import { Typography, Divider } from '@mui/material';

import { CoinType } from '@/types';

import { Item, CardBox1, CardBox2 } from './crypto-card.styles';

interface Props {
  coin: CoinType;
}

export const CryptoCard = ({ coin }: Props) => {
  const { change, iconUrl, marketCap, name, price, rank } = coin;

  return (
    <Item>
      <CardBox1>
        <Typography
          variant="h4"
          color="initial"
          sx={(theme) => ({
            fontSize: '18px',
            [theme.breakpoints.up('md')]: {
              fontSize: '24px',
            },
          })}
        >
          {/* truncate text */}
          {`${rank}.`} {name.substring(0, 20)} {name.length >= 20 && '...'}
        </Typography>
        <img
          style={{ width: '35px', height: '35px' }}
          src={iconUrl}
          alt={name}
        />
      </CardBox1>
      <Divider />
      <CardBox2>
        <p>Price: {millify(Number(price))}</p>
        <p>Market Cap: {millify(Number(marketCap))}</p>
        <p>Daily Change: {change}%</p>
      </CardBox2>
    </Item>
  );
};
