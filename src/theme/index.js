import { createTheme } from '@mui/styles';

const theme = createTheme({

    palette: {
        primary: {
            light: '3f4e4f',/* 3f4e4f */
            main: 'hsl(323 21% 16%)',/* 2c3639 */
            dark: '#161414',/* 161414 */
            contrastText: 'floralwhite',
        },
        secondary: {
            light: '#F0F5F9',/* a6b6c9 */
            main: '#D6D2C4',/* 5F6F94 */
            dark: '#52616B',/* 344966 */
            contrastText: 'floralwhite',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeighMedium: 600,
        fontWeighBold: 700,
    }

});

export default theme;