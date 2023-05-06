import React, {useState} from 'react';
import {AppBar,Box,Toolbar,IconButton, Typography,Menu , Container,Button,MenuItem,ThemeProvider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../theme";
import imageTop from "../assets/wave4.svg";
import {NavLink} from "react-router-dom";

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
    link:'/shop/'
    },
    {
        name:'Kontakt',
        link:'#contact'
    },
    {
        name:'Zaloguj',
        link:'/login/'
    }
];

const logo = require('../assets/logo bez tla.png');


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
                    backgroundColor:{xs:'#F3D188', md:'transparent'},
                    boxShadow:0,
                    backgroundImage: `url(${imageTop})`,
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
                                mt:{ xs: 2, xl:3 },
                            }}>
                            <img src={logo} alt='logo' />
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
                                    mt:'20px'
                                }}
                            >
                                <MenuIcon sx={{
                                    fontSize: '30px',
                                    color: 'black'
                                }}/>
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
                                {/*{pages.map((page) => (*/}
                                {/*    <MenuItem key={page.name} onClick={handleCloseNavMenu}>*/}
                                {/*        <a href={page.link} style={{*/}
                                {/*            textDecoration:'none',*/}
                                {/*            color: 'black'*/}
                                {/*        }}><Typography textAlign="center" sx={{*/}
                                {/*        }}>{page.name}</Typography></a>*/}
                                {/*    </MenuItem>*/}
                                {/*))}*/}

                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <a href='#about'
                                       style={{
                                        textDecoration:'none',
                                        color: 'black'
                                    }}><Typography textAlign="center"
                                       >
                                        O pasiece
                                    </Typography></a>
                                </MenuItem>

                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <a href='#colaboration'
                                       style={{
                                        textDecoration:'none',
                                        color: 'black'
                                    }}><Typography textAlign="center" sx={{
                                    }}>Współpraca</Typography></a>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"
                                                   component={NavLink}
                                                   to={`/shop`}
                                                   sx={{textDecoration:'none', color: 'black'
                                    }}>Sklep</Typography>
                                </MenuItem>

                                <MenuItem  onClick={handleCloseNavMenu}>
                                    <a href='#contact'
                                       style={{
                                        textDecoration:'none',
                                        color: 'black'
                                    }}>
                                    <Typography textAlign="center" sx={{
                                    }}> Kontakt</Typography></a>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"
                                                component={NavLink}
                                                to={`/login`}
                                                sx={{textDecoration:'none',color: 'black'
                                    }}>Zaloguj</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>


                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent:'flex-end' }}>
                            {/*{pages.map((page) => (*/}
                            {/*<Button*/}
                            {/*        // href={page.link}*/}
                            {/*        key={page.name}*/}
                            {/*        component={NavLink}*/}
                            {/*        to={`/${page.link}`}*/}
                            {/*        onClick={handleCloseNavMenu}*/}
                            {/*        sx={{ mb: 5,*/}
                            {/*            color: 'black',*/}
                            {/*            display: 'block' ,*/}
                            {/*            fontWeight: 700,*/}
                            {/*            fontSize: '16px',*/}
                            {/*            height:'100%'}}*/}
                            {/*    >*/}
                            {/*        {page.name}*/}
                            {/*    </Button>*/}
                            {/*))}*/}

                            <Button
                                href='#about'
                                onClick={handleCloseNavMenu}
                                sx={{ mb: 5,
                                    color: 'black',
                                    display: 'block' ,
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    height:'100%'}}
                            >
                                O pasiece
                            </Button>

                            <Button
                                href='#colaboration'
                                onClick={handleCloseNavMenu}
                                sx={{ mb: 5,
                                    color: 'black',
                                    display: 'block' ,
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    height:'100%'}}
                            >
                                Współpraca
                            </Button>

                            <Button
                                component={NavLink}
                                to={`/shop`}
                                onClick={handleCloseNavMenu}
                                sx={{ mb: 5,
                                    color: 'black',
                                    display: 'block' ,
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    height:'100%'}}
                            >
                                Sklep
                            </Button>

                            <Button
                                href='#contact'
                                onClick={handleCloseNavMenu}
                                sx={{ mb: 5,
                                    color: 'black',
                                    display: 'block' ,
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    height:'100%'}}
                            >
                                Kontakt
                            </Button>

                            <Button
                                component={NavLink}
                                to={`/login`}
                                onClick={handleCloseNavMenu}
                                sx={{ mb: 5,
                                    color: 'black',
                                    display: 'block' ,
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    height:'100%'}}
                            >
                                Zaloguj
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default Header;