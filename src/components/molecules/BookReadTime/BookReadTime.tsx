import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Typography } from '@mui/material';
import { customStyles } from '../../../theme/mainTheme';

interface BookReadTimeProps {
  children?: string;
  variant?: 'header' | 'title' | 'subtitle' | 'body' | 'caption';
}

const BookReadTime = (props: BookReadTimeProps) => {
  const classes = customStyles();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <AccessTimeIcon
        fontSize="small"
        color="action"
        className={classes.timeIcon}
      />
      <Typography
        variant="caption"
        color="grey"
        className={classes.iconText}
      >
        15-minute read
      </Typography>
    </div>
  );
};

export default BookReadTime;
