// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#skipping-queries-with-typescript-using-skiptoken
import { nanoid } from '@reduxjs/toolkit';
import millify from 'millify';
import { useParams } from 'react-router-dom';

import BoltIcon from '@mui/icons-material/Bolt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NumbersIcon from '@mui/icons-material/Numbers';
import { Box, Typography } from '@mui/material';

import { AppAccordion } from '@/shared/uikit/app-accordion/app-accordion';
import {
  AccordionLabel,
  AccordionLabelIcon,
} from '@/shared/uikit/app-accordion/app-accordion.styles';
import { useGetCryptoDetailsQuery } from '@/store/coins/api';
import { IDRouteParams } from '@/types';

export const CryptoDetailsValueStatistics = () => {
  const { id: coinId } = useParams<keyof IDRouteParams>() as IDRouteParams;

  const {
    data,
    // isFetching
  } = useGetCryptoDetailsQuery({ coinId }, { skip: !coinId });

  const cryptoDetails = data?.data?.coin;
  const accordionTitle = `${cryptoDetails?.name || ''} Value Statistics`;

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${millify(Number(cryptoDetails?.price || 0))}`,
      icon: <MonetizationOnIcon />,
    },
    { title: 'Rank', value: cryptoDetails?.rank || '', icon: <NumbersIcon /> },
    {
      title: '24h Volume',
      value: `$ ${millify(Number(cryptoDetails?.['24hVolume'] || 0))}`,
      icon: <BoltIcon />,
    },
    {
      title: 'Market Cap',
      value: `$ ${millify(Number(cryptoDetails?.marketCap || 0))}`,
      icon: <MonetizationOnIcon />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${millify(Number(cryptoDetails?.allTimeHigh.price || 0))}`,
      icon: <EmojiEventsIcon />,
    },
  ];

  //   if (isFetching) return <LoadingPage />;

  return (
    <AppAccordion title={accordionTitle}>
      <p>
        An overview showing the statistics of {cryptoDetails?.name || ''}, such
        as the base and quote currency, the rank, and trading volume.
      </p>
      {stats.map(({ icon, title, value }) => (
        <Box
          key={nanoid()}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <AccordionLabel>
            <AccordionLabelIcon>{icon}</AccordionLabelIcon>
            <Typography component="h5" variant="h6">
              {title}
            </Typography>
          </AccordionLabel>
          <Typography component="span" variant="body1">
            {value}
          </Typography>
        </Box>
      ))}
    </AppAccordion>
  );
};
