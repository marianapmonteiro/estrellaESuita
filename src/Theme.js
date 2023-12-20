import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D4B99E',
        },
        secondary: {
            main: '#0D0B08',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    }
});

export default theme;