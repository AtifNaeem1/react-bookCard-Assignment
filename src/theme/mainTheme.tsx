import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2CE080',
      light: '#E2F2E9',
      dark: '#22C870',
    },
    secondary: {
      main: '#116BE9',
    },
  },
  typography: {
    fontFamily: 'Cera Pro',
    subtitle1: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '23px',
    },
    body1: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
    },
    caption: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17.6px',
    }
  },
});
export default customTheme;

var customStyles = makeStyles({
  
  timeIcon: {
    width: '16.67px',
    height: '16.67px',
  },
  personIcon: {
    width: '13.33px',
    height: '17.7px',
  },
  iconText: {
    color: '#6D787E',
  },
  bookTitle: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '22.63px',
    color: '#03314B',
    marginBottom: '15px',
    marginTop: 16,
  },
  bookAuthor: {
    fontWeight: 500,
    color: '#6D787E',
    lineHeight: '20.11px',
    marginBottom: '15px',
  }
});
export { customStyles };
