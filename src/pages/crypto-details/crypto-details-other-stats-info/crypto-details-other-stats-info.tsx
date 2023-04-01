// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#skipping-queries-with-typescript-using-skiptoken
import { nanoid } from '@reduxjs/toolkit';
import millify from 'millify';
import { useParams } from 'react-router-dom';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';

import { AppAccordion } from '@/shared/uikit/app-accordion/app-accordion';
import {
  AccordionLabel,
  AccordionLabelIcon,
} from '@/shared/uikit/app-accordion/app-accordion.styles';
import { useGetCryptoDetailsQuery } from '@/store/coins/api';
import { IDRouteParams } from '@/types';

export const CryptoDetailsOtherStatsInfo = () => {
  const { id: coinId } = useParams<keyof IDRouteParams>() as IDRouteParams;

  const {
    data,
    // isFetching
  } = useGetCryptoDetailsQuery({ coinId }, { skip: !coinId });

  const cryptoDetails = data?.data?.coin;

  const stats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets || 0,
      icon: <AutoGraphIcon />,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges || 0,
      icon: <CurrencyExchangeIcon />,
    },
    {
      title: 'Confirmed Supply',
      value: cryptoDetails?.supply.confirmed ? <CheckIcon /> : <CloseIcon />,
      icon: <InfoIcon />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(Number(cryptoDetails?.supply.total))}`,
      icon: <InfoIcon />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(Number(cryptoDetails?.supply.circulating))}`,
      icon: <InfoIcon />,
    },
  ];

  //   if (isFetching) return <LoadingPage />;

  return (
    <AppAccordion title="Other Stats Info">
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
