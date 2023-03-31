// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#skipping-queries-with-typescript-using-skiptoken
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

import { Box, Link as MuiLink } from '@mui/material';

import { AppAccordion } from '@/shared/uikit/app-accordion/app-accordion';
import { useGetCryptoDetailsQuery } from '@/store/coins/api';
import { IDRouteParams } from '@/types';

export const CryptoDetailsLinks = () => {
  const { id: coinId } = useParams<keyof IDRouteParams>() as IDRouteParams;

  const {
    data,
    // isFetching
  } = useGetCryptoDetailsQuery({ coinId }, { skip: !coinId });

  const cryptoDetails = data?.data?.coin;
  const title = `${cryptoDetails?.name || ''} Links`;

  //   if (isFetching) return <LoadingPage />;

  return (
    <AppAccordion title={title}>
      <Box sx={{ typography: 'body1', ml: 2 }}>
        {cryptoDetails?.links?.map((link) => (
          <Box key={nanoid()}>
            <span style={{ marginRight: '5px' }}>{link.type}</span>
            <MuiLink
              href={link.url}
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </MuiLink>
            <br />
          </Box>
        ))}
      </Box>
    </AppAccordion>
  );
};
