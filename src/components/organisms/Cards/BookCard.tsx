import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import TypographyComponent from '../../atoms/Typography';
import BookReadTime from '../../molecules/BookReadTime/BookReadTime';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import { customStyles } from '../../../theme/mainTheme';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Grid, styled } from '@mui/material';
import customTheme from '../../../theme/mainTheme';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#E1ECFC',
  },
}));

export default function BookCard() {
  const classes = customStyles();

  return (
    <Card
      sx={{
        maxWidth: 284,
        height: 486,
        boxShadow: '0 15px 6px -6px #C6DAF6',
        borderRadius: '10px',
      }}
      className={classes.CardHead}
    >
      <CardMedia
        component="img"
        height="282"
        width="292"
        image={require('../../../images/BookCover.png')}
        alt="green iguana"
      />
      <CardContent>
        <TypographyComponent
          variant="subtitle1"
          children="Beyond Entrepreneurship"
          className={classes.bookTitle}
        />
        <TypographyComponent
          variant="body1"
          children="Jim Collins & Bill Lazier"
          className={classes.bookAuthor}
        />
        <BookReadTime />
      </CardContent>

      <CardActions
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <IconButton aria-label="hamburger">
          <MoreHorizIcon />
        </IconButton>
      </CardActions>
      <div>
        <Grid container direction="row">
          <Grid item xs={4} sx={{ backgroundColor: '#E1ECFC' }} />
          <Grid
            item
            xs={8}
            sx={{
              background: '#F1F6F4',
              border: '1px solid #E1ECFC',
              height: '15px',
            }}
          />
        </Grid>
      </div>
    </Card>
  );
}
