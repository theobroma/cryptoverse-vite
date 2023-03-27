import { Box, Paper, styled } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   padding: theme.spacing(1),
  padding: 0,
  //   textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const CardBox1 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '51px', // for skeleton sync
}));

export const CardBox2 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  minHeight: '132px', // for skeleton sync
}));
