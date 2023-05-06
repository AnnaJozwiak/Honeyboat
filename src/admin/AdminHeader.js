import {Avatar,AppBar,Box,Toolbar, Typography , Container,ThemeProvider} from '@mui/material';
import {NavLink} from "react-router-dom";
import theme from "../theme";
import imageTop from "../assets/wave4.svg";


const logo = require('../assets/logo bez tla.png');

const AdminHeader =() => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                sx ={{
                    backgroundColor:{xs:'#F3D188', md:'transparent'},
                    boxShadow:0,
                    backgroundImage: {xs:'none', md:`url(${imageTop})`},
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: { xs: '120px', md: '170px',lg: '200px', xl: '270px'},
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            sx={{
                                mr: 3,
                                display: 'flex',
                                height: { xs: '100px',lg: '150px', xl: '170px'},
                                ml:{ xs: 5, md: 12, lg: 17,xl:15 },
                                // mb:{ xs: 1, xl:3 },
                                mt:{ xs: 2, xl:3 },
                            }}
                            component={NavLink}
                            to={'/'}
                        >
                            <img src={logo} alt='logo' />

                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent:'flex-end' }}>
                            <Typography  sx ={{color: 'black',
                                display: 'block' ,
                                fontWeight: 700,
                                fontSize: '20px',
                                // mb:{  xs:1,lg:8 },
                            }}>
                                PANEL ADMINISTRATORA
                            </Typography>
                            <Avatar sx={{ bgcolor: 'black',
                                marginLeft:'20px',
                                width:'50px',
                                height:'50px',
                                fontFamily:'Montserrat',
                                fontWeight: 700,
                                fontSize: 20,
                                bottom:"10px",
                                color: '#F3D188'
                                 }}>
                                AJ
                            </Avatar>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default AdminHeader;