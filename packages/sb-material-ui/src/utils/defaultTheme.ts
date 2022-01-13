import { createTheme, responsiveFontSizes } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const defaultTheme = responsiveFontSizes(
  createTheme({
    palette: {
      common: {
        black: '#fff'
      },
      text: {
        primary: blueGrey[500],
        secondary: 'rgb(0, 0, 0, 0.05)'
      }
    }
  })
);

export default defaultTheme;
