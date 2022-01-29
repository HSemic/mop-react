import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  date: {
    color: '#787C7E'
  }
});

interface DateProps {
  date: string;
}

const Date = ({ date }: DateProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Typography className={classes.date} variant="body2" component="span">
      {date}
    </Typography>
  );
};

export default Date;
