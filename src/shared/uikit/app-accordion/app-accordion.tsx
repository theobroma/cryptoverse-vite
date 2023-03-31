import React, { PropsWithChildren, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Typography, AccordionDetails } from '@mui/material';

import { AccordionSummary } from './app-accordion.styles';

interface Props {
  title?: React.ReactElement | string;
}

export const AppAccordion = ({
  children,
  title = '',
}: PropsWithChildren<Props>) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            component="h3"
            variant="h6"
            sx={{
              width: '90%',
              flexShrink: 0,
              color: '#35373b',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '700',
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};
