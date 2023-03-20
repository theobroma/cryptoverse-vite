import { useState } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';

// import { PageEnum } from '@/enums/page.enum';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => {
  const [isOpen1, setOpen1] = useState(true);
  const [isOpen2, setOpen2] = useState(true);

  const handleClick1 = () => {
    setOpen1(!isOpen1);
  };

  const handleClick2 = () => {
    setOpen2(!isOpen2);
  };

  return (
    <List aria-label="primary routes">
      <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
    </List>
  );
};
