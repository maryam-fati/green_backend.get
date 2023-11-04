import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Change this to your desired color
    },
    secondary: {
      main: '#388e3c', // Change this to your desired color
    },
    type: 'dark', // Set the theme to dark mode
  },
});

export default Theme;