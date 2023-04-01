import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import { alpha, styled } from '@mui/material/styles';

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#673de6',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionLabel = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: alpha(theme.palette.common.black, 0.5),
  '& .MuiTypography-root': {
    fontSize: '16px',
    fontWeight: 400,
  },
}));

export const AccordionLabelIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '15px',
}));
