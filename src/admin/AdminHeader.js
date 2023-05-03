import {Avatar,AppBar,Box,Toolbar, Typography , Container,ThemeProvider} from '@mui/material';
import {NavLink} from "react-router-dom";
import theme from "../theme";


const logo = require('../assets/logo bez tla.png');

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
                                mb:{  xs:13,lg:8 },}}>
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

                                 }}>AJ</Avatar>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default AdminHeader;