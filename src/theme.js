import {createTheme} from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#F3D188',
        },
        third: {
            main: '#FEEEB2',
        },

    },

    typography: {
        fontFamily: [
            'Montserrat',
            'san-serif',
        ].join(','),
        fontSize: '14px',
        textDecoration: 'none',
        letterSpacing: '.3rem',
        flexGrow: 1,
    },


//     font-family: 'Dongle', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Montserrat', sans-serif;

    // button: {
    //      fontFamily: [
    //          'Montserrat',
    //          'san-serif',
    //      ].join(','),
    //  },
});
export default theme;