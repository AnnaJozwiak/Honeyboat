import React, {useState} from 'react';
import {AppBar,Box,Toolbar,IconButton, Typography,Menu , Container,Button,MenuItem,ThemeProvider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate, Link} from "react-router-dom";
import theme from "../theme";

const pages = [
    {
    name:'O pasiece',
    link:'#about'
    },
    // {
    // name:'Nasze przygody',
    // link:'/'
    // },
    {
    name:'Współpraca',
    link:'#colaboration'
    },
    {
    name:'Sklep',
    link:'/shop'
    },
    {
        name:'Kontakt',
        link:'#contact'
    },
    {
        name:'Zaloguj',
        link:'/login'
    }
];


const Header =() => {
    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                                // display: { xs: 'none', md: 'flex' },
                                height: { xs: '120px', md: '100px',lg: '150px', xl: '170px'},
                                ml:{ xs: 5, md: 12, lg: 17,xl:15 },
                                mt:{ xs: 2, xl:3 },
                            }}
                        >
                            <img src={require('../assets/logo bez tla.png')} alt='logo' />

                        </Typography>

                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                             justifyContent:'flex-end'}}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                                sx={{
                                    mb:6,
                                    mr: 3,
                                    fontSize: '30px'
                                }}
                            >
                                <MenuIcon size="large"/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    // backgroundColor: '#FEEEB2'
                                    mb:3
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <a href={page.link} style={{
                                            textDecoration:'none',
                                            color: 'black'
                                        }}><Typography textAlign="center" sx={{
                                        }}>{page.name}</Typography></a>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>


                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent:'flex-end' }}>
                            {pages.map((page) => (
                            <Button
                                    href={page.link}
                                    key={page.name}

                                    onClick={handleCloseNavMenu}
                                    sx={{ mb: 5,
                                        color: 'black',
                                        display: 'block' ,
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        height:'100%'}}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default Header;