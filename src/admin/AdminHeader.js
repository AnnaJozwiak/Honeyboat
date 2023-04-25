import {AppBar,Box,Toolbar, Typography , Container,ThemeProvider} from '@mui/material';

import theme from "../theme";

const AdminHeader =() => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                sx ={{
                    // backgroundColor:'#F3D188',
                    backgroundColor:'transparent',
                    boxShadow:0,

                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            sx={{
                                mr: 3,
                                display: 'flex',
                                height: { xs: '120px', md: '150px', xl: '170px'},
                                ml:{ xs: 5, md: 17, xl:15 },
                                mt:{ xs: 2, xl:3 },
                            }}
                        >
                            <img src={require('../assets/logo bez tla.png')} alt='logo' />

                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent:'flex-end' }}>
                            <Typography  sx ={{color: 'black',
                                display: 'block' ,
                                fontWeight: 700,
                                fontSize: '20px',
                                mb:{  lg:8 },}}>
                                PANEL ADMINISTRATORA /IKONA Z IMIENIEM USERA
                            </Typography>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default AdminHeader;